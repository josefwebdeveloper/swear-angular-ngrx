import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromAction from './actions/auth.actions';

import {environment} from '../../environments/environment';
import * as auth from './reducers/auth.reducers';


export interface State {
  authState: auth.AuthState;
}

export const reducers = {
  auth: auth.reducer
};

// export const selectAuthState = createFeatureSelector<State>('auth');
export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
// export const selectAuthState = createFeatureSelector<State>('auth');
