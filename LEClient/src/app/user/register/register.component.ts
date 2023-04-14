import { Component, EventEmitter, Output } from '@angular/core';
import { RegisterUser } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  @Output()
  cancelRegister = new EventEmitter();

  model: RegisterUser = { username:"", firstName: "", lastName: "", password: "", passwordControl: "" };

  constructor(private accountService: AccountService) {}

  register(){
    if(this.checkRegisterUser(this.model)){
      this.accountService.register(this.model)
        .subscribe({
          next: response => {
            console.log(response);
            this.cancel();
          },
          error: err => {console.log(err)}
        });
    }
  }

  cancel(){
    this.cancelRegister.emit();
  }

  private checkRegisterUser(user: RegisterUser) : boolean{
    if(user){

      if(user.firstName.length < 5 || user.lastName.length < 5 || user.username.length < 5 || user.password.length < 5 || user.passwordControl.length < 5){
        console.log("Form is not filled out completely.");
        return false;
      }

      if(user.password !== user.passwordControl){
        console.log("Passwords don't match.");
        return false;
      }

      return true;
    }

    return false;
  }

}
