import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  email!: string;
  passwd!: string;
  
  constructor(){
    this.email = '';
    this.passwd = '';
  }

  checkPass() {
    
  }

  checkMail() {

  }

  validateLogIn(){

  }
}
