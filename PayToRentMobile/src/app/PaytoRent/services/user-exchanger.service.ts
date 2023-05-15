import { Injectable } from '@angular/core';
import { Product } from './product-exchanger.service';
import { DatabaseService } from './database.service';

export interface User {
  name:string
  surname:string
  telephone:string
  userName:string
  birthDate:string
  photo:string
  address:string
  products:Product[]
  mail: string
  passwd: string
}

@Injectable({
  providedIn: 'root'
})
export class UserExchangerService {

  getThisUser(username:string){
    return this.dataBase.getUserById(username)
  }

  createUser(usr:User){
    this.dataBase.createUser(usr)
  }

  constructor(private dataBase: DatabaseService) { 

  }
}