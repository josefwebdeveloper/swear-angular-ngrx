import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  postTask(task) {
    const {title, description, startDate, endDate, sumCompany} = task;
    return this.http.post<any>(`${environment.apiUrl}/tasks`, {title, description, startDate, endDate, sumCompany})
      .pipe(map(data => {
        // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
        // tassk.authdata = window.btoa(username + ':' + password);
        // localStorage.setItem('currentUser', JSON.stringify(user));
        // this.currentUserSubject.next(user);
        return data;
      }));
  }

}
