import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user: User = new User();
  constructor(private httpClient: HttpClient) { }
  authenticate(username, password) {
    this.user.name = username;
    this.user.id = 1;
    this.user.password = password;
    return this.httpClient.post('http://localhost:8081/VehicleController/validateLogin', this.user, { responseType: 'text' }).pipe(map(userData => {
      sessionStorage.setItem('username', userData);
      return true;
    }
    ));
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

}
