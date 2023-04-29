import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductExchangerService } from 'src/app/PaytoRent/services/product-exchanger.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  products!:Product[]

  ngOnInit(){
    this.products = this.productService.products
  }
  
  constructor(private router: Router, private productService:ProductExchangerService) {
  }

  llamadaCatalogo(){
    this.router.navigate(['./catalogo']);
  }

  llamadaProducto(){
    this.router.navigate(['./producto']);
  }
}
