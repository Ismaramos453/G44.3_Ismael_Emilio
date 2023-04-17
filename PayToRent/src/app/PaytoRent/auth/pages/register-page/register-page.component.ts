import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  email !:string
  passwd1!: string
  passwd2!: string
  firstName!: string
  lastName !: string
  address !: string
  phone !: string
  birthDate !: Date
  username !:String 

  constructor(){
    this.address = ''
    this.passwd1 = ''
    this.passwd2 = ''
    this.username = ''
    this.firstName = ''
    this.lastName = ''
    this.phone = ''
    this.email = ''
    this.birthDate = new Date()
  }

  validatePasswordsMatch() {
    if (this.passwd1 !== this.passwd2) {
      return false
    } else {
      return true
    }
  }
  
}
