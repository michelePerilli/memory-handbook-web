import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RicercaPasswordComponent} from './password/ricerca-password/ricerca-password.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {HttpClientModule} from "@angular/common/http";
import {PasswordService} from "./password/password.service";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatSortModule} from "@angular/material/sort";
import {FormsModule} from "@angular/forms";
import {DettaglioPasswordComponent} from './password/dettaglio-password/dettaglio-password.component';
import {HomeComponent} from './home/home.component';
import {InserimentoPasswordComponent} from './password/inserimento-password/inserimento-password.component';


@NgModule({
  declarations: [
    AppComponent,
    RicercaPasswordComponent,
    DettaglioPasswordComponent,
    HomeComponent,
    InserimentoPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatSortModule,
    FormsModule
  ],
  providers: [PasswordService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
