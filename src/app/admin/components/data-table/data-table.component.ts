import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {
  res: any;
  data: {
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

  constructor(private http : HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<{users: any[]}>('https://dummyjson.com/users')
    .subscribe(Response => {
      if(Response){ 
        hideloader();
      }
      console.log(Response.users)
      this.res=Response.users;
      this.data=this.res;
      // this.dataService.sendData(this.lis);
      console.log(this.data)

      let pageIndex = (this.selectedPage - 1) * this.userPerPage
      this.users = this.data.slice(pageIndex, this.userPerPage)
    });

    function hideloader(){
      const loadingElement = document.getElementById('loading')
      if (loadingElement){
          loadingElement.style.display = 'none';
      }
    }
  }

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
}
