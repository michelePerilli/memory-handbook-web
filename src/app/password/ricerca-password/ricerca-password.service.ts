import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Password} from "../password";

@Injectable({
  providedIn: 'root'
})
export class RicercaPasswordService {

  constructor(private http: HttpClient) {
  }


  all() {
    return this.http.get<Password[]>(`http://localhost:8081/api/password/list`);
  }

  search(dto: Password) {
    return this.http.post<Password[]>(`http://localhost:8081/api/password/ricerca-mock`, dto);
  }

}
