import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, of, tap } from 'rxjs';
import { LoginDto, User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { isLoggedIn, isLoggedOut } from 'src/app/user/_state/user.selectors';
import { UserActions } from 'src/app/user/_state/user.types';
import { UserState } from 'src/app/user/reducers';
import { ToastrService } from 'ngx-toastr';
import { localHostAuthUser } from 'src/app/_utils/_variables';
import { login } from 'src/app/user/_state/user.actions';
import { getAccessToken } from 'src/app/_utils/auth.utils';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{

  model: LoginDto = {username: "", password: ""};
  isLoggedIn$: Observable<boolean> = of(false);
  isLoggedOut$: Observable<boolean> = of(true);

  constructor(
    public accountService: AccountService,
    private store: Store<UserState>,
    private toastr: ToastrService
    ) {
  }

  ngOnInit(): void {

    const userProfile = getAccessToken();
    if(userProfile){
      this.store.dispatch(login({user: JSON.parse(userProfile)}))
    }

    this.isLoggedIn$ = this.store
    .pipe(
      select(isLoggedIn)
    );

    this.isLoggedOut$ = this.store
    .pipe(
      select(isLoggedOut)
    );
  }

  login(){
    this.accountService.login(this.model)
    .pipe(
      tap( (data ) => { this.store.dispatch(UserActions.login({user: data}))})
    )
    .subscribe({
      complete: () => {
        this.model.username = "";
        this.model.password = "";
      }
    });
  }

  logout(){
    this.store.dispatch(UserActions.logout());
  }

}
