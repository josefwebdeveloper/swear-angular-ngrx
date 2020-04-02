import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {mergeMap} from 'rxjs/operators';

// import { AuthDTO, AuthType } from '@app/models/auth';
// import { User } from '@app/models/user';
import {CanActivate} from '@angular/router';
import {environment} from '../../environments/environment';
import {User} from '../models/user';
import {AuthDTO, AuthType} from '../models/auth';

@Injectable()
export class AuthService implements CanActivate {
  private api: string = environment.apiUrl + '/auth';
  private apiGetMe: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  auth(authType: AuthType, data: AuthDTO): Observable<User> {
    return this.http.post<User>(`${this.api}/${authType}`, data).pipe(
      mergeMap((user: User) => {
        // debugger
        this.token = user.token;
        return of(user);
      })
    );
  }

  whoami(): Observable<User> {
    return this.http.get<User>(`${this.apiGetMe}/tasks/getme`, {
      headers: {authorization: `Bearer ${this.token}`}
    });
  }

  get token(): string {
    return localStorage.getItem('swear_token');
  }

  set token(val: string) {
    if (val) {
      localStorage.setItem('swear_token', val);
    } else {
      localStorage.clear();
    }
  }

  canActivate() {
    if (this.token) {
      return true;
    }
    return false;
  }
}
