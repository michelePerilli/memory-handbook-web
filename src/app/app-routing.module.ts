import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DettaglioPasswordComponent} from "./password/dettaglio-password/dettaglio-password.component";
import {RicercaPasswordComponent} from "./password/ricerca-password/ricerca-password.component";
import {HomeComponent} from "./home/home.component";
import {InserimentoPasswordComponent} from "./password/inserimento-password/inserimento-password.component";

const routes: Routes = [
  {path: 'password/show', component: DettaglioPasswordComponent},
  {path: 'password/insert', component: InserimentoPasswordComponent},
  {path: 'password', component: RicercaPasswordComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
