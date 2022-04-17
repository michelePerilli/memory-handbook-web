import {Component, OnInit} from '@angular/core';
import {Password} from "../password";
import {PasswordService} from "../password.service";

@Component({
  selector: 'app-inserimento-password',
  templateUrl: './inserimento-password.component.html',
  styleUrls: ['./inserimento-password.component.scss', '../../app.component.scss']
})
export class InserimentoPasswordComponent implements OnInit {

  page: Password = {}
  id: number = 0;

  constructor(private passwordService: PasswordService) {
  }

  ngOnInit(): void {
  }

  clear() {
    this.page.email = '';
    this.page.password = '';
    this.page.username = '';
    this.page.descrizione = '';
  }

  insert() {
    this.passwordService.insert(this.page).subscribe((res) => {
      this.id = res;
    })
  }
}
