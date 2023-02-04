import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudUserService } from '../../services/crud-user.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {
  res: any;
  data: {
    id: string,
    firstName: string, 
    lastName: string, 
    username: string,
    email: string,
    gender: string,
    image: string
  }[] = [];
  userPerPage: number = 5;
  public selectedPage = 1;
  users: any[] = []
  modalAdd: boolean = false
  modalEdit: boolean = false
  id = 0
  firstName = ''
  lastName = ''
  username = ''
  email = ''
  gender = ''
  image = ''
  isAct: any;
  more: boolean = false
  selectedUser: any;

  constructor(private http : HttpClient, private crudService: CrudUserService) {
  }

  ngOnInit(): void {
    // Start of Get Data Users
    this.http.get<{users: any[]}>('https://dummyjson.com/users')
    .subscribe(Response => {
      if(Response){ 
        hideloader();
      }
      this.res=Response.users;
      this.data=this.res;

      let pageIndex = (this.selectedPage - 1) * this.userPerPage
      this.users = this.data.slice(pageIndex, this.userPerPage)
    });

    function hideloader(){
      const loadingElement = document.getElementById('loading')
      if (loadingElement){
          loadingElement.style.display = 'none';
      }
    }
    // End of Get Data Users

    this.data
  }

  // Start of paginate function
  changePageSize(event: Event){
    const newSize = (event.target as HTMLInputElement).value
    this.userPerPage = Number(newSize)
    this.changePage(1)
  }

  get pageNumbers(): number[] {
    return Array(Math.ceil(this.data.length / this.userPerPage))
      .fill(0).map((x,i) => i+1)
  }

  changePage(page: any) {
    this.selectedPage = page
    this.slicedUsers()
  }

  slicedUsers() {
    let pageIndex = (this.selectedPage - 1) * this.userPerPage
    let endIndex = (this.selectedPage - 1) * this.userPerPage + this.userPerPage
    this.users = []
    this.users = this.data.slice(pageIndex,endIndex)
  }

  nextPage() {
    if (this.selectedPage < this.pageNumbers.length) {
      this.selectedPage++
      this.changePage(this.selectedPage)
    }
  }

  prevPage() {
    if (this.selectedPage > 1) {
      this.selectedPage--
      this.changePage(this.selectedPage)
    }
  }
  // End of paginate Function

  // Add User's Modal
  setModalAdd() {
    this.modalAdd = !this.modalAdd
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.username = '';
    this.gender = '';
    this.image = '';
  }

  addUser() {
    from(this.crudService.addUser(this.firstName, this.lastName, this.username, this.email, this.gender, this.image))
    .subscribe(res => {
      this.data.push(res)
    }
    );
  }

  setAct(id:string) {
    this.isAct = id
    this.id = this.isAct
  }

  setMore() {
    this.more = !this.more
  }

  // Edit User's Modal
  setModalEdit() {
    this.modalEdit = !this.modalEdit
  }

  setEditUser(user:any) {
    if(user.id == this.isAct) {
      this.id = this.isAct
      this.selectedUser = user;
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.email = user.email;
      this.username = user.username;
      this.gender = user.gender;
      this.image = user.image;
      this.modalEdit = true;
    }
  }

  editUser() {
    from(this.crudService.editUser(this.id, this.firstName, this.lastName, this.username, this.email, this.gender, this.image))
    .subscribe(res => {
      let updated = false;
      this.data = this.data.map(obj => {
        if (obj.id === res.id) {
          updated = true;
          return res;
        }
        return obj;
      });
      if (!updated) {
        this.data.push(res);
      }
    }
    );
    alert("Data berhasil diupdate")
  }

  deleteUser() {
    from(this.crudService.deleteUser(this.id))
    .subscribe(res => {
      this.data = this.data.filter(item => item.id !== res.id);
    }
    );
    alert("Data berhasil dihapus")
  }
}
