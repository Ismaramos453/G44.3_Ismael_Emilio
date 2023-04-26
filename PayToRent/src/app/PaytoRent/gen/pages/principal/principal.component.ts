import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductExchangerService } from 'src/app/PaytoRent/services/product-exchanger.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  productsCarrousel!:Product[][]
  isActive!:number

  ngOnInit(){
    this.productsCarrousel = this.divideLista(this.productService.products)
    this.isActive=0
  }
  
  constructor(private router: Router, private productService:ProductExchangerService) {
  }

  llamadaCatalogo(){
    this.router.navigate(['./catalogo']);
  }

  llamadaProducto(){
    this.router.navigate(['./producto']);
  }

  divideLista(list:Product[]) :Product[][]{
    const subListas: Product[][] = [];
    for (let i = 0; i < list.length; i += 4) {
      subListas.push(list.slice(i, i + 4));
    }
    return subListas;
  }
}
