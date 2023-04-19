import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonsCardListComponent } from './persons-card-list/persons-card-list.component';
import { PersonsCardDetailComponent } from './persons-card-detail/persons-card-detail.component';
import { PersonsListComponent } from './persons-list/persons-list.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonsRoutingModule } from './persons-routing.module';



@NgModule({
  declarations: [
    PersonsCardListComponent,
    PersonsCardDetailComponent,
    PersonsListComponent,
    PersonDetailComponent
  ],
  imports: [
    CommonModule,
    PersonsRoutingModule
  ]
})
export class PersonsModule { }
