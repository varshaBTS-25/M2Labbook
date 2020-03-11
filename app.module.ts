import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { EmployeeserviceService } from './employeeservice.service';
import { HttpClient,HttpClientModule} from '@angular/common/http';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewEmployeeComponent,
    UpdateemployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpClient,EmployeeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
