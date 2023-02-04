import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudUserService {

  constructor() { }
    // Start of add data user
  addUser(firstName:string, lastName:string, username:string, email:string, gender:string, image:string) {
    return fetch('https://dummyjson.com/users/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName,
        lastName,
        username,
        email,
        gender,
        image
      })
    })
    .then(res => res.json())
    .then(data => {return data});
  }

  editUser(id:number, firstName:string, lastName:string, username:string, email:string, gender:string, image:string) {

    return fetch(`https://dummyjson.com/users/${id}`, {
      method: 'PUT', /* or PATCH */
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName,
        lastName,
        username,
        email,
        gender,
        image
    })
    })
    .then(res => res.json())
    .then(data => {return data});
  }

  deleteUser(id:number) {
    return fetch(`https://dummyjson.com/users/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {return data});
  }
}
