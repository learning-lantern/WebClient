import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  getTasks() {
    // console.log(environment.apiRoot);
    return this.http.get(`${environment.apiRoot}/get`);
  }
  deleteTasks() {
    // console.log(environment.apiRoot);
    return this.http.delete(`${environment.apiRoot}/delete`);
  }
  toPost() {
    // console.log(environment.apiRoot);
    return this.http.post(`${environment.apiRoot}/post`, {});
  }
  toPatch() {
    // console.log(environment.apiRoot);
    return this.http.patch(`${environment.apiRoot}/patch`, {});
  }
}
