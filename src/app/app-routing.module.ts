import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DettaglioPasswordComponent} from "./password/dettaglio-password/dettaglio-password.component";
import {RicercaPasswordComponent} from "./password/ricerca-password/ricerca-password.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: 'insert', component: DettaglioPasswordComponent},
  {path: 'search', component: RicercaPasswordComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
