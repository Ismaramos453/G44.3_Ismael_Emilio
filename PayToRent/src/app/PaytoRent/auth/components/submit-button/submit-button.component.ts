import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.css']
})
export class SubmitButtonComponent {

  private _disabled = false

  @Input()
  set disabled (value:boolean){
    this._disabled = value
  }

  get disabled () {
    return this._disabled
  }
}
