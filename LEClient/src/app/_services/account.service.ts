import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { LoginDto, RegisterDto, RegisterUser, User } from '../_models/user';

@Injectable()
export class AccountService {

  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  login(model: LoginDto): Observable<User>{
    return  this.http.post<User>(this.baseUrl + 'account/login', model);
  }

  register(model: RegisterUser){
    return this.http.post<User>(this.baseUrl + "account/register", model as RegisterDto);
  }
}
