import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  ventanaAbierta: boolean = false;
  precio: number = 500;

  constructor() { }

  ngOnInit(): void {
  }

  abrirVentana() {
    this.ventanaAbierta = true;
  }

  cerrarVentana() {
    this.ventanaAbierta = false;
  }

  confirmarPrecio() {
    // Aquí puedes agregar la lógica para confirmar el precio seleccionado.
    console.log('Precio confirmado:', this.precio);
    this.cerrarVentana();
  }

  onPriceChange(event: Event) {
    this.precio = (event.target as HTMLInputElement).valueAsNumber;
  }

}
