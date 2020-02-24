import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Intercepator implements HttpInterceptor{

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
console.log("before intercepator", request);
        request = request.clone({
            setHeaders: { 
                Authorization: 'basic'
            }
        });
        console.log("after intercepator", request);
    return next.handle(request);

}

  }
