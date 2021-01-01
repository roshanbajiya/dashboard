import { NgModule } from '@angular/core';
import { EmployeeDetailsComponent } from './modules/employee-details/employee-details.component';
import { CreateEmployeeComponent } from './modules/create-employee/create-employee.component';

import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './modules/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './modules/update-employee/update-employee.component';

import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';


const routes: Routes = [
  {path: '', component: DefaultComponent,children: [
  {path: '',component: DashboardComponent}, 
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: CreateEmployeeComponent },
  {path: 'posts',component: PostsComponent},
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
  

]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
