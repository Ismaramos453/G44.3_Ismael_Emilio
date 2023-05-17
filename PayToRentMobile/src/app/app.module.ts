import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

import { LoginPageComponent } from './PaytoRent/auth/pages/login-page/login-page.component';
import { RegisterComponent } from './PaytoRent/auth/pages/register/register.component';
import { HeaderComponent } from './PaytoRent/gen/components/header/header.component';
import { FooterComponent } from './PaytoRent/gen/components/footer/footer.component';
import { CatalogoComponent } from './PaytoRent/gen/pages/catalogo/catalogo.component';
import { PerfilComponent } from './PaytoRent/gen/pages/perfil/perfil.component';
import { PrincipalComponent } from './PaytoRent/gen/pages/principal/principal.component';
import { ProductoComponent } from './PayToRent/gen/pages/producto/producto.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: PrincipalComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'producto/:id', component: ProductoComponent }
];

@NgModule({
  declarations: [AppComponent,LoginPageComponent,RegisterComponent,HeaderComponent,FooterComponent,CatalogoComponent,PerfilComponent,PrincipalComponent,ProductoComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp(environment.firebase)), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent,ModalController],
})
export class AppModule {}
