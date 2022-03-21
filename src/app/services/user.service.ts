import { HttpClient, HttpResponse,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import {Response} from '../models/response';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loginUrl = `${environment.baseUrl+'login'}`
  private usersUrl = `${environment.baseUrl+'user/users'}`

  constructor(private http : HttpClient) { }

  login(user: User): Observable<HttpResponse<any>>{
    console.log('login method on UserService.')
    console.log({
      loginUrl: this.loginUrl
    })
    console.log({
      user: user
    })

    const headers = new HttpHeaders ({'Content-Type' : 'application/json'})


    return this.http.post(this.loginUrl,user,{'headers' : headers, 'responseType': 'text', observe:'response'});
  }

  findAll(): Observable<HttpResponse<any>>{
    console.log('findAll method on UserService.')

    const headers = new HttpHeaders ({'Content-Type' : 'application/json','Access-Control-Allow-Origin' : '*'})

    return this.http.get(this.usersUrl,{'headers' : headers, 'responseType': 'text', observe:'response'})
  }
}
