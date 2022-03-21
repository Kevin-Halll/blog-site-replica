import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient,
  HttpXsrfTokenExtractor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserInfoInterceptor implements HttpInterceptor {

  constructor( private tokenExtractor: HttpXsrfTokenExtractor) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cookieheaderName = 'XSRF-TOKEN';
    let csrfToken = this.tokenExtractor.getToken() as string;

    if (csrfToken !== null && !request.headers.has(cookieheaderName)) {
      console.log(csrfToken);
      request = request.clone({ headers: request.headers.set(cookieheaderName, csrfToken) });
      }
      return next.handle(request);
    }
}
