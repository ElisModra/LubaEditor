import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoginDto, User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{

  model: LoginDto = {username: "", password: ""};

  constructor(public accountService: AccountService) {
  }

  ngOnInit(): void {
  }

  login(){
    this.accountService.login(this.model)
    .subscribe({
      complete: () => {
        this.model.username = "";
        this.model.password = "";
      }
    });
  }

  logout(){
    this.accountService.logout();
  }

}
