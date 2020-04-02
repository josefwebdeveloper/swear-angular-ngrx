import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './store/app.state';
import * as fromAuth from './store/reducers/auth.reducer';
import {AuthService} from './services/auth.service';
import {SetInitialUser} from './store/actions/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'front-angular';

  constructor(
    private store: Store<AppState>,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    if (this.authService.token) {
      this.store.dispatch(new SetInitialUser());
    }

  }
}
