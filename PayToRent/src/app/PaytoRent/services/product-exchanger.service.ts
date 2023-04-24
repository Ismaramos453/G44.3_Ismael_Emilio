import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';

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
    let filteredList: Product[] = [];
    for(let product of this.products){
      if(product.name === filter){
        filteredList.push(product);
      }
    }    
    return filteredList
  }

  filterByPrice(filter:string){
    let filteredList: Product[] = [];
    for(let product of this.products){
      if(Number(product.price)>= Number(filter)){
        filteredList.push(product)
      }
    }
    return filteredList
  }

  filterByColor(filter:string){
    let filteredList: Product[] = [];
    for(let product of this.products){
      if(product.colour === filter){
        filteredList.push(product);
      }
    }    
    return filteredList
  }

  filterByRate(filter:string){
    let filteredList: Product[] = [];
    for(let product of this.products){
      if(Number(product.rating)>= Number(filter)){
        filteredList.push(product)
      }
    }
    return filteredList
  }
  
  constructor(private dataBase: DatabaseService) { }


}
