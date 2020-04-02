// import { AuthActions, Action } from '@app/store/actions/auth.action';

import {Action, createSelector} from '@ngrx/store';
import {User} from '../../models/user';
import {ActionsAuth, AuthActions} from '../actions/auth.actions';
import {AppState} from '../app.state';

export interface AuthState {
  user: User | null;
  loading: boolean;
  loaded: boolean;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  loaded: false
};

export const authReducer: (state: AuthState, action: ActionsAuth) => AuthState = (
  state = initialState,
  action: ActionsAuth
) => {
  switch (action.type) {
    case AuthActions.LOGIN_USER:
      return {...state, loading: true, loaded: false};
    case AuthActions.REGISTER_USER:
      return {...state, loading: true, loaded: false};
    case AuthActions.SET_INITIAL_USER:
      return {...state, loading: true, loaded: false};
    case AuthActions.SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
        loaded: true
      };
    default:
      return state;
  }
};

export const selectAuthState = (state: AppState) => state.auth;
export const selectCurrentUser = createSelector(selectAuthState, (state: AuthState) => state.user);

