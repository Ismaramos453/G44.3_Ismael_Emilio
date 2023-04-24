import { Injectable } from '@angular/core';

export interface Product {
  name:string
  price:string
  colour:string
  description:string
  owner:string
  rating:number
  image:string
}

@Injectable({
  providedIn: 'root'
})

export class ProductExchangerService {


  products!:Product[]

  filterByName(filter:string){

  }

  filterByPrice(filter:string){

  }

  filterByColor(filter:string){

  }

  filterByRate(filter:string){

  }

  constructor() { }


}
