import { Component } from '@angular/core';
import { ProductExchangerService } from 'src/app/PaytoRent/services/product-exchanger.service';
import { Product } from 'src/app/PaytoRent/services/product-exchanger.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {

  productos!:Product[]

  ngOnInit(): void {
    this.productos= this.productService.products
  }

  constructor(private productService:ProductExchangerService){

  }

  abrirMapa(){
    const popup: Window | null = window.open('', 'mapa', 'width=600,height=450');
    if (popup && popup.document) {
      popup.document.write('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56303.26422620416!2d-15.474722322594067!3d28.117431982132615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc40950e91c097d1%3A0xab36b5ac5338ba65!2sLas%20Palmas%20de%20Gran%20Canaria%2C%20Las%20Palmas!5e0!3m2!1ses!2ses!4v1679227388544!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
    }
  }

  abrirVentanaColor(){
    
  }

  abrirVentanaPlazas(){

  }

  abrirVentanaPrecio(){
    
  }

}
