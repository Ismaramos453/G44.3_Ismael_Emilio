import { Component } from '@angular/core';
import { Product,ProductExchangerService } from 'src/app/PaytoRent/services/product-exchanger.service';
import { User, UserExchangerService } from 'src/app/PaytoRent/services/user-exchanger.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  userName!:string
  userPhoto!:string
  productPhoto!:string
  productDescription!:string
  productComments!:string[]
  productGallery!:string[]

  ngOnInit(){

  }

  constructor(private productService:ProductExchangerService,private userService:UserExchangerService){

  }

}
