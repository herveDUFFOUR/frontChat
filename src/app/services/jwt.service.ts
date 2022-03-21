import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class JwtService implements HttpInterceptor {

  token: any

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('intercept method.')

    this.token = 'Bearer ' + localStorage.getItem('token')

    if(this.token){
      console.log({token: this.token})

      const authReq = req.clone({
        headers: req.headers.set('Authorization',this.token).append('Access-Control-Allow-Origin','*')
      });

      return next.handle(authReq)
    }

    return next.handle(req);

  }
}
