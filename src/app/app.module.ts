import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PasswordComponent} from './password/password.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FlexLayoutModule} from "@angular/flex-layout";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {HttpClientModule} from "@angular/common/http";
import {DettaglioPasswordComponent} from './password/dettaglio-password/dettaglio-password.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RicercaPasswordComponent} from './password/ricerca-password/ricerca-password.component';
import {RicercaPasswordService} from "./password/ricerca-password/ricerca-password.service";


@NgModule({
  declarations: [
    AppComponent,
    PasswordComponent,
    DettaglioPasswordComponent,
    RicercaPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [RicercaPasswordService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
