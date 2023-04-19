import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable, tap } from 'rxjs';
import { UserState } from '../user/reducers';
import { isLoggedIn } from '../user/_state/user.selectors';

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

}
