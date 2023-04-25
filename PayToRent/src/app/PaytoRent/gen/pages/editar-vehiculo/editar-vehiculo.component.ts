import { Component } from '@angular/core';
import { Product, ProductExchangerService } from 'src/app/PaytoRent/services/product-exchanger.service';

@Component({
  selector: 'app-editar-vehiculo',
  templateUrl: './editar-vehiculo.component.html',
  styleUrls: ['./editar-vehiculo.component.css']
})
export class EditarVehiculoComponent {
  
  description !:string
  photo!:string

  ngOnInit(){

  }
  constructor(private productService:ProductExchangerService){

  }

}
