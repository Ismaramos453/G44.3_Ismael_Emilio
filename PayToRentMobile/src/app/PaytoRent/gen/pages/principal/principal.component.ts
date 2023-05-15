import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService, Product } from '../../../services/product.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {
  productos: Product[] = [];
  productName!:string
  constructor(private router: Router, private productService: ProductService) {}


  mainImages: string[] = [];

  ngOnInit() {
    this.productService.products.subscribe(products => {
      this.productos = products;
    });
  
  
}

showProductDetails(productId: string) {
  this.router.navigate(['./producto', productId]);
}

  handleCollectionClick(collectionName: string) {
    this.productService.setCollection(collectionName);
    this.router.navigate(['./catalogo']);
  }

  search(){

  }
}
