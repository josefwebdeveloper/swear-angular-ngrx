import { Action } from '@ngrx/store';
import {AuthDTO} from '../../models/auth';
import {User} from '../../models/user';


export enum AuthActions {
  LOGIN_USER = '[AUTH] Login user',
  REGISTER_USER = '[AUTH] Register user',
  SET_INITIAL_USER = '[AUTH] Set initial user',
  SET_CURRENT_USER = '[AUTH] Set current user'
}

export class LoginUser implements Action {
  readonly type = AuthActions.LOGIN_USER;
  constructor(public payload: AuthDTO) {}
}

export class RegisterUser implements Action {
  readonly type = AuthActions.REGISTER_USER;
  constructor(public payload: AuthDTO) {}
}

export class SetInitialUser implements Action {
  readonly type = AuthActions.SET_INITIAL_USER;
}

export class SetCurrentUser implements Action {
  readonly type = AuthActions.SET_CURRENT_USER;
  constructor(public payload: User | null) {}
}

export type ActionsAuth = LoginUser | RegisterUser | SetCurrentUser | SetInitialUser;
