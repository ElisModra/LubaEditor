import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "../_guards/auth.guard";
import { PersonDetailComponent } from "./person-detail/person-detail.component";
import { PersonsCardDetailComponent } from "./persons-card-detail/persons-card-detail.component";
import { PersonsCardListComponent } from "./persons-card-list/persons-card-list.component";

@NgModule({
  imports:[
    RouterModule.forChild([
      {
        path: '',
        component: PersonsCardListComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: 'persons-card',
            component: PersonsCardListComponent,
            children: [
              {
                path: ':id',
                component: PersonsCardDetailComponent
              }
            ]
          }
        ]
      },
      {
        path: ':id',
        canActivate: [AuthGuard],
        component: PersonDetailComponent
      }

    ])
  ],
  exports: [RouterModule],
})
export class PersonsRoutingModule{

}
