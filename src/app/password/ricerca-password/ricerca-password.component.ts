import {Component, OnInit} from '@angular/core';
import {Password} from "../password";
import {PasswordService} from "../password.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-ricerca-password',
  templateUrl: './ricerca-password.component.html',
  styleUrls: ['./ricerca-password.component.scss', '../../app.component.scss']
})
export class RicercaPasswordComponent implements OnInit {
  displayedColumns: string[] = ['email', 'pass', 'user', 'desc', 'id'];

  results: Password[] = [];
  showResult: boolean = false;
  page: Password = {};


  constructor(public ricercaService: PasswordService, private router: Router) {

  }

  new() {
    this.router.navigate(['/password/insert']);
  }

  ngOnInit(): void {
    this.clear();
  }

  all() {
    this.ricercaService.all().subscribe((res) => {
      this.results = res;
    })
  }

  clear() {
    this.showResult = false;
    this.page.email = '';
    this.page.password = '';
    this.page.username = '';
    this.page.descrizione = '';
  }

  search() {
    this.showResult = true;
    this.ricercaService.search(this.page).subscribe((res) => {
      res.map(x => {
        x.password = '**********';
      })
      this.results = res;
    })
  }

  home() {
    this.router.navigate(['home']);
  }
}
