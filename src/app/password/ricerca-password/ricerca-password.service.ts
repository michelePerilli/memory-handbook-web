import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {baseURL} from "../../../environments/environment";
import {Password} from "../password";

@Injectable({
  providedIn: 'root'
})
export class RicercaPasswordService {

  constructor(private http: HttpClient) {
  }

  all() {
    return this.http.get<Password[]>(`${baseURL}/password/list`);
  }

  search(data: Password) {
    return this.http.post<Password[]>(`${baseURL}/password/ricerca`, data);
  }

}
