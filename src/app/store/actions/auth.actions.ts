import {Action, createAction, props} from '@ngrx/store';

export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',
  SIGNUP = '[Auth] Signup',
  SIGNUP_SUCCESS = '[Auth] Signup Success',
  SIGNUP_FAILURE = '[Auth] Signup Failure',
  LOGOUT = '[Auth] Logout',
  GET_STATUS = '[Auth] GetStatus'
}

// export const LogIn = createAction(
//   AuthActionTypes.LOGIN,
//   props<{ payload: any }>()
// );
// export const LogInSuccess = createAction(
//   AuthActionTypes.LOGIN_SUCCESS,
//   props<{ payload: any }>()
// );
// export const LogInFailure = createAction(
//   AuthActionTypes.LOGIN_FAILURE,
//   props<{ payload: any }>()
// );
// export const SignUp = createAction(
//   AuthActionTypes.SIGNUP,
//   props<{ payload: any }>()
// );
//
// export const SignUpSuccess = createAction(
//   AuthActionTypes.SIGNUP_SUCCESS,
//   props<{ payload: any }>()
// );
//
//
// export const SignUpFailure = createAction(
//   AuthActionTypes.SIGNUP_FAILURE,
//   props<{ payload: any }>()
// );
//
// export const LogOut = createAction(
//   AuthActionTypes.LOGOUT
// );
// //
// export const GetStatus = createAction(
//   AuthActionTypes.GET_STATUS
// );
//
// export type AuthActionsUnion = ReturnType<
//   typeof LogIn | typeof GetStatus | typeof LogOut|
// typeof SignUpFailure | typeof SignUpSuccess | typeof SignUp| typeof LogInFailure|typeof LogInSuccess
//   >;

export class LogIn implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor(public payload: any) {}
}

export class LogInSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class LogInFailure implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILURE;
  constructor(public payload: any) {}
}

export class SignUp implements Action {
  readonly type = AuthActionTypes.SIGNUP;
  constructor(public payload: any) {}
}

export class SignUpSuccess implements Action {
  readonly type = AuthActionTypes.SIGNUP_SUCCESS;
  constructor(public payload: any) {}
}

export class SignUpFailure implements Action {
  readonly type = AuthActionTypes.SIGNUP_FAILURE;
  constructor(public payload: any) {}
}

export class LogOut implements Action {
  readonly type = AuthActionTypes.LOGOUT;
}

export class GetStatus implements Action {
  readonly type = AuthActionTypes.GET_STATUS;
}

export type All =
  | LogIn
  | LogInSuccess
  | LogInFailure
  | SignUp
  | SignUpSuccess
  | SignUpFailure
  | LogOut
  | GetStatus;
