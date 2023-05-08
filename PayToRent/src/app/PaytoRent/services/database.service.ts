import { Injectable } from '@angular/core';
import { Product } from './product-exchanger.service';
import { User } from './user-exchanger.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  products!: Product[]
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

  createUser(usr: User) {

    const userCollectionRef$ = this.firestore.collection('Users');
    userCollectionRef$.add({
      name: usr.name,
      surname: usr.surname,
      telephone: usr.telephone,
      userName: usr.userName,
      birthDate: usr.birthDate,
      address: usr.address,
      mail: usr.mail,
      password: usr.passwd,
      photo: usr.photo,
      products: usr.products
    }).then(docRef => {
      console.log('Usuario agregado con ID:', docRef.id);
    })
      .catch(error => {
        console.error('Error al agregar usuario:', error);
      });
  }
}
