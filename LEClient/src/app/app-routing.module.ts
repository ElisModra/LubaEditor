import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonDetailComponent } from './persons/person-detail/person-detail.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test', component: PersonDetailComponent},
  {
    path: 'person',
    loadChildren: () => import('./persons/persons.module').then((m) => m.PersonsModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: HomeComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
