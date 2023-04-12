import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  email!: string
  passwd!: string
  
  constructor(){
    this.email = ''
    this.passwd = ''
  }

  checkPass():boolean {
    return true;
  }

  checkMail():boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(this.email)||this.email != ''
  }

  validateLogIn(){

  }
}
