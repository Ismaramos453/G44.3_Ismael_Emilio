import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { NotFoundError } from 'rxjs';
import { User } from './user-exchanger.service';

export interface Product {
  name:string
  price:string
  colour:string
  description:string
  owner:User
  rating:number
  image:string
  seats:string
  id:number
  comments:string[]
  gallery:string[]
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

  filterById(filter:number){
    for(let product of this.products){
      if(product.id === filter){
        return product
      }
    }

    return null
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

  filterBySeats(filter:string){
    let filteredList: Product[] = [];
    for(let product of this.products){
      if(Number(product.seats)>= Number(filter)){
        filteredList.push(product)
      }
    }
    return filteredList
  }

  constructor(private dataBase: DatabaseService) {
    this.products = dataBase.getProducts()
  }


}
