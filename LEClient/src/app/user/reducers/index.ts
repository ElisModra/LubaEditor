import { isDevMode } from '@angular/core';
import {
  MetaReducer,
  on,
  createReducer
} from '@ngrx/store';
import { UserActions } from '../_state/user.types';
import { User } from 'src/app/_models/user';

export const userFeatureKey = 'user';

export interface UserState {
  user: User | undefined
}

export const initialUserState: UserState = {
  user: undefined
}


export const userReducers = createReducer(
  initialUserState,

  on(UserActions.logout, (state, action) => {
    return {user: undefined}
  }),
  on(UserActions.login, (state, action) => {
    return {user: action.user}
  }),
);


export const metaReducers: MetaReducer<UserState>[] = isDevMode() ? [] : [];
