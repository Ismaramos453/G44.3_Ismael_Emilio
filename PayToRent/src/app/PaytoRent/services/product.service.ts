import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { combineLatest } from 'rxjs';
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
    const coches$ = this.firestore.collection<Product>('Coches').valueChanges();
    const motos$ = this.firestore.collection<Product>('Motos').valueChanges();
    const camiones$ = this.firestore.collection<Product>('Camiones').valueChanges();
    const bicicletas$ = this.firestore.collection<Product>('Bicicletas').valueChanges();
    const skates$ = this.firestore.collection<Product>('Skates').valueChanges();
    const patinetes$ = this.firestore.collection<Product>('Patinete').valueChanges();
  
    this.products = combineLatest([coches$, motos$, camiones$, bicicletas$, skates$, patinetes$]).pipe(
      map(products => products.reduce((accumulator, currentValue) => accumulator.concat(currentValue)))
    );
  }
  
  getProductsByColor(color: string): Observable<Product[]> {
    return this.products.pipe(
      map(products => products.filter(product => product.colour.toLowerCase() === color.toLowerCase()))
    );
  }

  // En ProductService
setCollection(collectionName: string) {
  this.products = this.firestore.collection<Product>(collectionName).valueChanges();
}
  

  getProductsBySeats(seats: string): Observable<Product[]> {
    return this.products.pipe(
      map(products => products.filter(product => product.seats === seats))
    );
  }
  getProductsByPrice(price: number): Observable<Product[]> {
    return this.products.pipe(
      map(products => products.filter(product => parseInt(product.price) <= price))
    );
  }
  getProductById(id: string): Observable<Product | undefined> {
    return this.products.pipe(
      map(products => products.find(product => product.id === id))
    );
  }

  getProductsByCollection(collection: string): Observable<Product[]> {
    return this.firestore.collection<Product>(collection).valueChanges();
  }
  

  

getProductsFromCollection(collectionName: string): Observable<Product[]> {
  return this.firestore.collection<Product>(collectionName).valueChanges();
}


  

}


