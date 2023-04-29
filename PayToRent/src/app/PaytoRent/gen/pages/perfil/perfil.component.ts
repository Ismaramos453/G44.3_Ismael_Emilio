import { Component } from '@angular/core';
import { User,UserExchangerService } from 'src/app/PaytoRent/services/user-exchanger.service';
import { Product } from 'src/app/PaytoRent/services/product-exchanger.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
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
