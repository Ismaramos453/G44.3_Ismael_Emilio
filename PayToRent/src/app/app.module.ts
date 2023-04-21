import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './PaytoRent/auth/pages/login-page/login-page.component';
import { RegisterPageComponent } from './PaytoRent/auth/pages/register-page/register-page.component';


import { PrincipalComponent } from './PaytoRent/gen/pages/principal/principal.component';
import { CatalogoComponent } from './PaytoRent/gen/pages/catalogo/catalogo.component';

import { TextLabelComponent } from './PaytoRent/auth/components/text-label/text-label.component';
import { SubmitButtonComponent } from './PaytoRent/auth/components/submit-button/submit-button.component';
import { HeaderComponent } from './PaytoRent/gen/components/header/header.component';
import { FooterComponent } from './PaytoRent/gen/components/footer/footer.component';
import { ErrorMessageComponent } from './PaytoRent/auth/components/error-message/error-message.component';
import { ChatComponent } from './PaytoRent/gen/pages/chat/chat.component';
import { ProductoComponent } from './PaytoRent/gen/pages/producto/producto.component';
import { ReservaComponent } from './PaytoRent/gen/pages/reserva/reserva.component';
import { PagoComponent } from './PaytoRent/gen/pages/pago/pago.component';
import { PerfilComponent } from './PaytoRent/gen/pages/perfil/perfil.component';
import { EditarVehiculoComponent } from './PaytoRent/gen/pages/editar-vehiculo/editar-vehiculo.component';
import { EditarPerfilComponent } from './PaytoRent/gen/pages/editar-perfil/editar-perfil.component';
import { VerAnuncioComponent } from './PaytoRent/gen/pages/ver-anuncio/ver-anuncio.component';
import { PerfilVendedorComponent } from './PaytoRent/gen/pages/perfil-vendedor/perfil-vendedor.component';
import {RouterModule, Routes} from "@angular/router";
import { RegisterComponent } from './PaytoRent/auth/pages/register/register.component';


const appRoute: Routes = [
  {path: '', redirectTo:'Home', pathMatch:'full'},
  {path: 'Home', component:PrincipalComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'producto', component: ProductoComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'propietario', component: PerfilVendedorComponent},
  {path: 'alquilar', component: ReservaComponent},
  {path: 'pagar', component: PagoComponent},
  {path: 'verAnuncio', component: VerAnuncioComponent},
  {path: 'editar', component: EditarPerfilComponent},
  {path: 'editarVehiculo', component: EditarVehiculoComponent}

  
  

];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    PrincipalComponent,
    TextLabelComponent,
    SubmitButtonComponent,
    HeaderComponent,
    FooterComponent,
    ErrorMessageComponent,
    CatalogoComponent,
    ChatComponent,
    ProductoComponent,
    ReservaComponent,
    PagoComponent,
    PerfilComponent,
    EditarVehiculoComponent,
    EditarPerfilComponent,
    VerAnuncioComponent,
    PerfilVendedorComponent,
    RegisterComponent


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



