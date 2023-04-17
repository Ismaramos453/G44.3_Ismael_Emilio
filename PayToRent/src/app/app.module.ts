import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './PaytoRent/auth/pages/login-page/login-page.component';
import { RegisterPageComponent } from './PaytoRent/auth/pages/register-page/register-page.component';
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
    TextLabelComponent,
    SubmitButtonComponent,
    HeaderComponent,
    FooterComponent,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
