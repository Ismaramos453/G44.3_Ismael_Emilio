import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Product {
  name: string;
  price: string;
  colour: string;
  description: string;
  owner: string;
  rating: number;
  image: string;
  seats: string;
  id: string;
  comments: string[];
  gallery: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Observable<Product[]>;

  constructor(private firestore: AngularFirestore) {
    this.products = this.firestore.collection<Product>('Coches').valueChanges();
  }

}


