import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSubj = new BehaviorSubject('');

  constructor() {
  }

  sendDate(message) {
    this.dataSubj.next(message);
  }


  getDate(): Observable<any> {
    return this.dataSubj.asObservable();
  }
}
