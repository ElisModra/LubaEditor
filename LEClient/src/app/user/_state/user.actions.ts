import { createAction, props } from "@ngrx/store";
import { User } from '../../_models/user';


export const login = createAction('[NAV_BAR] UserLoginAction', props<{user: User}>());

export const logout = createAction('[NAV_BAR] UserLogoutAction');

