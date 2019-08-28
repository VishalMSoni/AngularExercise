import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpClient, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor(private httpClient: HttpClient) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Request --->>>');
    console.log(req);
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        console.log(event.type);
        if (event instanceof HttpResponse) {
          console.log('Response --->>>');
          console.log(event);
        }
        return event;
      }));
  }

}
