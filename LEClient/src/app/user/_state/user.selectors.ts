import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "../reducers";

export const selectUserState = createFeatureSelector<UserState>("user");

export const isLoggedIn = createSelector(
  selectUserState,
  (user) => !!user.user
)

export const isLoggedOut = createSelector(
  selectUserState,
  (user) => user.user === undefined
)
