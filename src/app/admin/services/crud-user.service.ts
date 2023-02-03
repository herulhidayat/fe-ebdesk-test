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
}
