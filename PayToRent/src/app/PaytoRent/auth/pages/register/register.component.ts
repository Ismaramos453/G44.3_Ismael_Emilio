import { Component } from '@angular/core';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email !: string
  passwd1!: string
  passwd2!: string
  firstName!: string
  lastName !: string
  address !: string
  phone !: string
  birthDate !: string
  username !: String

  constructor() {
    this.address = ''
    this.passwd1 = ''
    this.passwd2 = ''
    this.username = ''
    this.firstName = ''
    this.lastName = ''
    this.phone = ''
    this.email = ''
    this.birthDate = ''
  }

  validatePass() {
    /*const securePass = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/"
    return this.passwd1.length >= 8 && this.passwd1.match(securePass)*/
    return this.passwd1.length >=8
  }

  validatePasswordsMatch() {
    if (this.passwd1 !== this.passwd2) {
      return false
    } else {
      return true
    }
  }

  validateBirthDate(date: string) {
    const birthdateArray = date.split('/');
    const day = parseInt(birthdateArray[0], 10);
    const month = parseInt(birthdateArray[1], 10) - 1; // El mes en JS empieza en 0 (enero)
    const year = parseInt(birthdateArray[2], 10);
    const ageLimit = 18; // Límite de edad
    
    const birthdate = new Date(year, month, day);
    const today = new Date();
    const ageInMs = today.getTime() - birthdate.getTime();
    const ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365.25); // Año bisiesto
    
    return ageInYears < ageLimit;
  }

  validateMail() {
    const emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
    return this.email.match(emailPattern)
  }

  validatePhone() {
    const phonePattern = "/^(\+\d{1,3}\s?)?\d{8,14}$/"
    return this.phone.match(phonePattern)
  }

  validateAddress() {
    const addressPattern = "/^[a-zA-Z0-9\s]{1,100}$/"
    return this.address.match(addressPattern)
  }

  validateNotEmpty(item:String){
    return item && item.trim().length > 0 && item.length >= 5
  }
}
