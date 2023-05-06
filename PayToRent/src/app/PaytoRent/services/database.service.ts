import { Injectable } from '@angular/core';
import { Product } from './product-exchanger.service';
import { User } from './user-exchanger.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { combineLatest,Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  products!:Product[]
  users: Observable<User[]>

  getProducts() {
    return this.products
  }

  getUsers() {
    return this.users
  }
  
  constructor(private firestore: AngularFirestore) { 
    const userList$ = this.firestore.collection<User>('Users').valueChanges();

    this.users = combineLatest([userList$]).pipe(
      map(users => users.reduce((accumulator, currentValue) => accumulator.concat(currentValue)))
    );

  }

  getUserById(id: string): Observable<User | undefined> {
    return this.users.pipe(
      map(users => users.find(user => user.userName === id))
    );
  }
}
