import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import * as fromAuth from './reducers/auth.reducer';

import * as fromAction from './actions/auth.actions';

import {environment} from '../../environments/environment';
import {RouterStateUrl} from './reducers/router.reducer';
import {errorReducer, ErrorState} from './reducers/error.reducer';
import {AuthState} from './reducers/auth.reducer';


export interface AppState {
  auth: AuthState;
  router: fromRouter.RouterReducerState<RouterStateUrl>;
  error: ErrorState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  router: fromRouter.routerReducer,
  error: errorReducer,
};

// export const selectAuthState = createFeatureSelector<State>('auth');
export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
// export const selectAuthState = createFeatureSelector<State>('auth');
