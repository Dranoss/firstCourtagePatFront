
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userToken = localStorage.getItem('token');
    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `${userToken}`)
    });
    // if (!req.headers.has('Content-Type')) {
    //   modifiedReq = req.clone({ headers: req.headers.delete('Content-Type', 'application/json')});
    //   return next.handle(modifiedReq);
    // }
    // else{
    return next.handle(modifiedReq);
    // }
}
}
