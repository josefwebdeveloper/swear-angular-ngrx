// import {User} from '../../model/user';
// import {authAction, AuthActionTypes} from '../actions/auth.actions';
// import * as AuthAction from '../actions/auth.actions';
// import {Action, createReducer, on} from '@ngrx/store';
//
// export interface AuthState {
//   // is a user authenticated?
//   isAuthenticated: boolean;
//   // if authenticated, there should be a user object
//   user: User | null;
//   // error message
//   errorMessage: string | null;
// }
//
// export const initialState: AuthState = {
//   isAuthenticated: false,
//   user: null,
//   errorMessage: null
// };
// // const authReducer = createReducer(
// //   initialState,
// //   on(AuthAction.LogInSuccess, (state, {payload}) => ({
// //     ...state, isAuthenticated: true,
// //     user: {
// //       token: payload.token,
// //       email: payload.email
// //     },
// //     errorMessage: null
// //   })),
// //   on(AuthAction.LogInFailure, state => ({
// //     ...state, errorMessage: 'Incorrect email and/or password.'
// //   })),
// //   on(AuthAction.SignUpSuccess, (state, {payload}) => ({
// //     ...state, isAuthenticated: true,
// //     user: {
// //       token: payload.token,
// //       email: payload.email
// //     },
// //     errorMessage: null
// //   })),
// //   on(AuthAction.LogInFailure, state => ({
// //     ...state, errorMessage: 'That email is already in use.'
// //   })),
// //   on(AuthAction.LogOut, state => ({
// //     ...state, initialState
// //   }))
// // );
// //
// // export function reducer(state: AuthState | undefined, action: Action) {
// //   return authReducer(state, action);
// // }
//
//
// export const authReducer: (state: AuthState, action: authAction) => AuthState = (
//   state = initialState,
//   action: authAction
// ) => {
//   switch (action.type) {
//     case AuthActionTypes.LOGIN_SUCCESS: {
//       return {
//         ...state,
//         isAuthenticated: true,
//         user: {
//           token: action.payload.token,
//           email: action.payload.email
//         },
//         errorMessage: null
//       };
//     }
//     case AuthActionTypes.LOGIN_FAILURE: {
//       return {
//         ...state,
//         errorMessage: 'Incorrect email and/or password.'
//       };
//     }
//     case AuthActionTypes.SIGNUP_SUCCESS: {
//       return {
//         ...state,
//         isAuthenticated: true,
//         user: {
//           token: action.payload.token,
//           email: action.payload.email
//         },
//         errorMessage: null
//       };
//     }
//     case AuthActionTypes.SIGNUP_FAILURE: {
//       return {
//         ...state,
//         errorMessage: 'That email is already in use.'
//       };
//     }
//     case AuthActionTypes.LOGOUT: {
//       return initialState;
//     }
//     default: {
//       return state;
//     }
//   }
// };
