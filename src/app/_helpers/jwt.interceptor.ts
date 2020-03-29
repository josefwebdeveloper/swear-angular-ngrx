import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

// import { AuthenticationService } from '@app/_services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add auth header with jwt if user is logged in and request is to api url
    // const currentUser = this.authenticationService.currentUserValue;
    // const isLoggedIn = currentUser && currentUser.token;
    // tslint:disable-next-line:prefer-const
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Impvc2VwZjEyMjIzIiwiaWF0IjoxNTg1MzkxNTE5LCJleHAiOjE1ODU0NDU1MTl9.l7uN2eig9w-wahO5GWC4CsADDxRUvuuMwFrr-9nvdks';
    // const isApiUrl = request.url.startsWith(environment.apiUrl);
    // if (isLoggedIn && isApiUrl) {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    // }

    return next.handle(request);
  }
}
