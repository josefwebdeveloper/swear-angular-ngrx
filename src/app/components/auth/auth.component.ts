import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';

// import { AppState } from '@app/store';
// import { LoginUser, RegisterUser } from '@app/store/actions/auth.action';
import {AppState} from '../../store/app.state';
import {validateWhitespace} from '../../_helpers/validators';
import {AuthType} from '../../models/auth';
import {LoginUser, RegisterUser} from '../../store/actions/auth.actions';
// import { AuthType } from '@app/models/auth';
// import { validateWhitespace } from '@app/utilities/validators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
  authForm: FormGroup;
  loading = false;
  subscription$;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.authForm = this.fb.group({
      username: this.fb.control('', [Validators.required, validateWhitespace]),
      password: this.fb.control('', [Validators.required, validateWhitespace])
    });
    console.log(this.authForm);


  }

  auth(authType: AuthType = 'login') {
    const action = {
      login: LoginUser,
      register: RegisterUser
    };
    const val = this.authForm.getRawValue();
    console.log(val);
    console.log(this.authForm);
    console.log(action);
    console.log(action[authType]);
    console.log(authType);
    this.store.dispatch(new action[authType](val));
    this.subscription$ = this.store
      .select(state => state.auth)
      .subscribe(v => {
        console.log(v);
        this.loading = v.loading;
        if (v.user && v.loaded) {
          this.router.navigate(['/']);
        }
      });
  }

  ngOnDestroy() {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }
}
