import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './PaytoRent/auth/pages/login-page/login-page.component';
import { RegisterPageComponent } from './PaytoRent/auth/pages/register-page/register-page.component';
import { CategoriasVehiculosComponent } from './PaytoRent/gen/components/categorias-vehiculos/categorias-vehiculos.component';


import { DescripcionProductoComponent } from './PaytoRent/gen/components/descripcion-producto/descripcion-producto.component';
import { VehiculosDestacadosComponent } from './PaytoRent/gen/components/vehiculos-destacados/vehiculos-destacados.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    CategoriasVehiculosComponent,
    DescripcionProductoComponent,
    VehiculosDestacadosComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
