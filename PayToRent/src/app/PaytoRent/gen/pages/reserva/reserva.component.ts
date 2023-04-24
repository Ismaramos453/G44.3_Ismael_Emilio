import { Component } from '@angular/core';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent {
  dateFrom: string;
  dateTo: string;
  dateFromError: string = '';
  dateToError: string = '';

  constructor(){
    this.dateFrom=''
    this.dateTo=''
  }

  checkReservationDates(){
    if (this.dateFrom === '') {
      this.dateFromError = 'Por favor, escriba una fecha';
      return false;
    } else if (this.dateTo === '') {
      this.dateToError = 'Por favor, escriba una fecha';
      return false;
    } else {
      this.dateFromError = '';
      this.dateToError = '';

      const today = new Date().toLocaleDateString();

      if (new Date(this.dateFrom) < new Date(today) || new Date(this.dateFrom) > new Date(this.dateTo)) {
        this.dateFromError = 'Esta fecha no es valida';
        return false;
      } else if (new Date(this.dateTo) < new Date(today) || new Date(this.dateTo) < new Date(this.dateFrom)) {
        this.dateToError = 'Esta fecha no es valida';
        return false;
      } else {
        this.dateFromError = '';
        this.dateToError = '';
        return true;
      }
    }
  }

  checkReservation(){
    if(this.checkReservationDates()){
      return true
    }
    return false
  }
}



