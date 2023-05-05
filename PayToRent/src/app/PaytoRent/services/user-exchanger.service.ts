import { Injectable } from '@angular/core';
import { Product } from './product-exchanger.service';
import { DatabaseService } from './database.service';
import { NotFoundError } from 'rxjs';

export interface User {
  name:string
  surname:string
  telephone:string
  userName:string
  birthDate:string
  photo:string
  address:string
  products:Product[]
}

@Injectable({
  providedIn: 'root'
})
export class UserExchangerService {

  users:User[]

  getThisUser(username:string){
    for(let user of this.users){
      if(user.userName === username){
        return user
      }
    }
    return NotFoundError
  }

  constructor(private dataBase: DatabaseService) { 
    this.users = dataBase.getUsers()
  }
}
