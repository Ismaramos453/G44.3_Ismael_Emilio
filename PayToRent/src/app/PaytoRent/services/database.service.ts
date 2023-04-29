import { Injectable } from '@angular/core';
import { Product } from './product-exchanger.service';
import { User } from './user-exchanger.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  products!:Product[]
  users !:User[]

  getProducts() {
    return this.products
  }

  getUsers() {
    return this.users
  }
  
  constructor() { }
}
