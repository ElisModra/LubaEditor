import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { UserState } from '../user/reducers';
import { isLoggedOut } from '../user/_state/user.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  registerMode = false;
  isLoggedOut$: Observable<boolean> = of(true);

  constructor(
    private store: Store<UserState>
    ) {}

  ngOnInit(): void {
     this.isLoggedOut$ = this.store
    .pipe(
      select(isLoggedOut)
    );
  }

  registerToggle(){
    this.registerMode = !this.registerMode;
  }
}
