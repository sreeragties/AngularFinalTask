import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { ViewIndividualDetailsComponent } from './view-individual-details/view-individual-details.component';

const routes: Routes = [
  {path:'create', component: CreateEmployeeComponent},
  {path:'list', component: ViewDetailsComponent},
  {path:'details/:id', component: ViewIndividualDetailsComponent},
  {path: '', redirectTo: '/create', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
