import {Component, OnInit} from '@angular/core';
import {Password} from "../password";
import {RicercaPasswordService} from "./ricerca-password.service";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

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

  constructor(public ricercaService: RicercaPasswordService) {
  }

  ngOnInit(): void {
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
      this.results = res;
    })
  }
}
