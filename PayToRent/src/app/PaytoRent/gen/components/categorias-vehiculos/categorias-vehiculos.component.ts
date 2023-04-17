import { Component } from '@angular/core';

@Component({
  selector: 'app-categorias-vehiculos',
  templateUrl: './categorias-vehiculos.component.html',
  styleUrls: ['./categorias-vehiculos.component.css']
})
export class CategoriasVehiculosComponent {
  public circulos = [
    { id: 1, imagen: '../../../../../assets/img/coche.png' },
    { id: 2, imagen: '../../../../../assets/img/moto.png' },
    { id: 3, imagen: '../../../../../assets/img/bicileta.png' },
    { id: 4, imagen: '../../../../../assets/img/patinete.png' },
    { id: 5, imagen: '../../../../../assets/img/skate.png' },
    { id: 6, imagen: '../../../../../assets/img/camion.png' }
  ];

}
