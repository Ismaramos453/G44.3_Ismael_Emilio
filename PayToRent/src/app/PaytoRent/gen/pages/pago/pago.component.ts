import { Component } from '@angular/core';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent {

  fecha!: string
  cardHolder!:string
  cardNumber!:string
  cvc !:string
  name !: string

  constructor () {
    this.fecha=''
    this.cardHolder=''
    this.cardNumber=''
    this.cvc=''
    this.name = ''
  }

  checkName(){
    return this.name.length > 0
  }

  checkData(data:String){
    const regex = "^\d{3}|\d{16}$"
    return data.match(regex)
  }

  checkExpireDate(){
    return true
  }

  checkPayment(){
    if(this.checkName() && this.checkData(this.cardNumber) && this.checkData(this.cvc) && this.checkExpireDate()){
      return true
    }
    return false
  }
}
