import { Component } from '@angular/core';

@Component({
  selector: 'app-vehiculos-destacados',
  templateUrl: './vehiculos-destacados.component.html',
  styleUrls: ['./vehiculos-destacados.component.css']
})
export class VehiculosDestacadosComponent {
  public numFilas = [1, 2]; // Cambiar por el número de filas que deseas mostrar
  public numCuadradosPorFila = 4;


}
