import { Component, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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

  constructor(
    private accountService: AccountService,
    private toastr: ToastrService
    ) {}

  register(){
    if(this.checkRegisterUser(this.model)){
      this.accountService.register(this.model)
        .subscribe({
          next: response => {
            this.toastr.success("User's account for "+response.username+" was created.")
            console.log(response);
            this.cancel();
          },
          error: err => {
            console.log(err)
          }
        });
    }
  }

  cancel(){
    this.cancelRegister.emit();
  }

  private checkRegisterUser(user: RegisterUser) : boolean{
    if(user){

      if(user.firstName.length < 2 || user.lastName.length < 2 || user.username.length < 5 || user.password.length < 5 || user.passwordControl.length < 5){
        this.toastr.error("Form is not filled out completely.");
        return false;
      }

      if(user.password !== user.passwordControl){
        this.toastr.error("Passwords don't match.");
        return false;
      }

      return true;
    }

    return false;
  }

}
