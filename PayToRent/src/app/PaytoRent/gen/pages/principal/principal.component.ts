import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/PaytoRent/services/product.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  
  constructor(private router: Router, private productService: ProductService) {}

  handleCollectionClick(collectionName: string) {
    this.productService.setCollection(collectionName);
    this.router.navigate(['./catalogo']);
  }
}
