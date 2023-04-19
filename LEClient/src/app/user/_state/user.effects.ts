import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";
import { localHostAuthUser } from "src/app/_utils/_variables";
import { UserActions } from "./user.types";

@Injectable()
export class UserEffects{


  constructor(
    private actions$: Actions,
    private router: Router
  ) {}

  login$ = createEffect(() => this.actions$
      .pipe(
        ofType(UserActions.login),
        tap((action) => {
          localStorage.setItem(localHostAuthUser, JSON.stringify(action.user))
        })
      ),
      {dispatch: false}
  );

  logout$ = createEffect(() => this.actions$
        .pipe(
          ofType(UserActions.logout),
          tap(() => {
            localStorage.removeItem(localHostAuthUser);
            this.router.navigateByUrl('/');
          })
        ),
        {dispatch: false}
  );
}
