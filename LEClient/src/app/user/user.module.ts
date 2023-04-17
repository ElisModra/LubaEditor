import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromUser from './reducers';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.userReducers, { metaReducers: fromUser.metaReducers })
  ],
  exports:[
    RegisterComponent
  ]
})
export class UserModule { }
