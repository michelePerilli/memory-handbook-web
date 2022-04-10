import {Component, OnInit} from '@angular/core';
import {RicercaPasswordService} from "./ricerca-password.service";
import {Password} from '../password';

@Component({
  selector: 'app-ricerca-password',
  templateUrl: './ricerca-password.component.html',
  styleUrls: []
})
export class RicercaPasswordComponent implements OnInit {

  records: Password[] = [];


  constructor(private searchService: RicercaPasswordService) {
  }

  ngOnInit(): void {
    this.all()
  }

  search() {
    this.searchService.search(this.records[0]).subscribe((res) => {
      this.records = res;
    })
  }

  all() {
    this.searchService.all().subscribe((res) => {
      this.records = res;
    })
  }
}
