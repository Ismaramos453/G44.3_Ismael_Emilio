import { Component } from '@angular/core';
import { Product,ProductExchangerService } from 'src/app/PaytoRent/services/product-exchanger.service';
import { User, UserExchangerService } from 'src/app/PaytoRent/services/user-exchanger.service';
import { ActivatedRoute } from '@angular/router';

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
    const productId = Number(this.route.snapshot.queryParamMap.get('id'));
    const prod = this.productService.filterById(productId);
    if(prod != null){
      this.productComments = prod.comments
      this.productDescription = prod.description
      this.productGallery = prod.gallery
      this.productPhoto = prod.image
    }

  }

  constructor(private productService:ProductExchangerService,private userService:UserExchangerService,private route: ActivatedRoute){

  }

}
