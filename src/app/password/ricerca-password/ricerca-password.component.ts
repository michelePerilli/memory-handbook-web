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
  displayedColumns: string[] = ['email', 'pass', 'user', 'desc'];

  results: Password[] = [];

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

  search() {
    this.ricercaService.search(this.page).subscribe((res) => {
      this.results = res;
    })
  }
}
