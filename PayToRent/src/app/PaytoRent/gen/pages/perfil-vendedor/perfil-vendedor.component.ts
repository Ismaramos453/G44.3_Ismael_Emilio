import { Component } from '@angular/core';
import { User,UserExchangerService } from 'src/app/PaytoRent/services/user-exchanger.service';
import { Product } from 'src/app/PaytoRent/services/product-exchanger.service';


@Component({
  selector: 'app-perfil-vendedor',
  templateUrl: './perfil-vendedor.component.html',
  styleUrls: ['./perfil-vendedor.component.css']
})

export class PerfilVendedorComponent {

  email!:string
  address!:string
  phone!:string
  photo!:string
  name!:string
  surname!:string
  userName!:string
  birthDate!:string
  products!:Product[]

  constructor(private userService:UserExchangerService){

  }

}
