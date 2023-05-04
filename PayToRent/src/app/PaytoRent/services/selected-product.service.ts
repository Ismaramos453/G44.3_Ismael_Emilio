import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class SelectedProductService {
  private selectedProductSubject = new BehaviorSubject<Product | null>(null);
  selectedProduct$: Observable<Product | null> = this.selectedProductSubject.asObservable();

  setSelectedProduct(product: Product) {
    this.selectedProductSubject.next(product);
  }
}

