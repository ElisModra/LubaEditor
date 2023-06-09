import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';
import { User } from './_models/user';
import { localHostAuthUser } from './_utils/_variables';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'LEClient';
  users: any;


  constructor(
    private http: HttpClient,
    private accountService: AccountService
    ) {

  }
  ngOnInit(): void {

  }

  getUsers(){
    this.http.get('https://localhost:5001/api/users').subscribe(
      {
        next: (response) => { this.users = response },
        error: (errors) => { console.log(errors)},
        complete: () => { console.log(this.users)}
      }
    )
  }


}
