import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable, tap } from 'rxjs';
import { UserState } from '../user/reducers';
import { isLoggedIn } from '../user/_state/user.selectors';
import { hasCurrentUserRoles, isTokenValid } from '../_utils/auth.utils';
import { Role } from '../_utils/_enums';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {


  constructor(
    private store: Store<UserState>,
    private router: Router,
    private toastr: ToastrService
    ) {
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> {
    return this.store
    .pipe(
      select(isLoggedIn),
      tap(isLoggedIn => {
        if(!isLoggedIn){
          this.toastr.error("You shall not pass!");
          this.router.navigateByUrl("/");
        }
      })
    )
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>  {
    return this.store
    .pipe(
      select(isLoggedIn),
      tap(isLoggedIn => {
        if(!isLoggedIn){
          this.toastr.error("You shall not pass!");
          this.router.navigateByUrl("/");
        }
      })
    )
  }

  private checkAuthorization(route: Route | ActivatedRouteSnapshot): boolean {
    if (!route.data || !(route.data['roles'])) {
      return true;
    }

    const roles = route.data['roles'] as Role[];
    const rolesOp = route.data['rolesOp'];
    const hastRoles = hasCurrentUserRoles(roles , rolesOp);

    if (hastRoles) {
      return true;
    }

    this.router.navigate(['error/403'], { state: { forceDeactivate: true } });
    return false;
  }

  private checkAuthentication(url?: string): boolean {
    if (isTokenValid()) {
      return true;
    }
    // here might be some redirection according of url, as user can navigate to specific page but is redirected to auth first.
    this.router.navigate(['auth'], {
      state: { forceDeactivate: true },
      queryParams: { redirectTo: url },
    });
    return false;
  }

}
