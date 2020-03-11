import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { UpdateemployeeComponent} from './updateemployee/updateemployee.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path:'app-view-employee',
    component:ViewEmployeeComponent
  },
  {
    path:'app-updateemployee',
    component:UpdateemployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
