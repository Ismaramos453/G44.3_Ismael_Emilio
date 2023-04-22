import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  email!: string
  passwd!: string

  constructor() {
    this.email = ''
    this.passwd = ''
  }

  validateLogIn(loginForm: any): void {
    if (this.validateMail() && this.validatePass()) {
      
    } else {
      loginForm.submitted = true;
    }
  }
  validateMail() {
    const emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
    return this.email.match(emailPattern)
  }

  validatePass() {
    return this.passwd.length >= 8
  }
}


