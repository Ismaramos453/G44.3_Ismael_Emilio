import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './PaytoRent/auth/pages/login-page/login-page.component';
import { RegisterPageComponent } from './PaytoRent/auth/pages/register-page/register-page.component';
import { CategoriasVehiculosComponent } from './PaytoRent/gen/components/categorias-vehiculos/categorias-vehiculos.component';
import { VehiculosDestacadosComponent } from './PaytoRent/gen/components/vehiculos-destacados/vehiculos-destacados.component';
import { PrincipalComponent } from './PaytoRent/gen/pages/principal/principal.component';
import { CatalogoComponent } from './PaytoRent/gen/pages/catalogo/catalogo.component';

import { TextLabelComponent } from './PaytoRent/auth/components/text-label/text-label.component';
import { SubmitButtonComponent } from './PaytoRent/auth/components/submit-button/submit-button.component';
import { HeaderComponent } from './PaytoRent/gen/pages/header/header.component';
import { FooterComponent } from './PaytoRent/gen/pages/footer/footer.component';
import { ErrorMessageComponent } from './PaytoRent/auth/components/error-message/error-message.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    CategoriasVehiculosComponent,
    VehiculosDestacadosComponent,
    PrincipalComponent,
    TextLabelComponent,
    SubmitButtonComponent,
    HeaderComponent,
    FooterComponent,
    ErrorMessageComponent,
    CatalogoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
