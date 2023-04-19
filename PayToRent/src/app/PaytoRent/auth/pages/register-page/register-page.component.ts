import { Component } from '@angular/core';

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
  }

  validatePasswordsMatch() {
    if (this.passwd1 !== this.passwd2) {
      return false
    } else {
      return true
    }
  }

  validateBirthDate() {
    const today = new Date();
    var age = today.getFullYear() - this.birthDate.getFullYear();
    const month = today.getMonth() - this.birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < this.birthDate.getDate())) {
      age--;
    }
    return age >= 18;
  }
  
}
