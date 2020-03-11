import { Component, OnInit } from '@angular/core';
import {Emplo, EmployeeserviceService } from './employeeservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'EmpAngularCRUD';
  createdEmp:Emplo;
  createdFlag:boolean=false;

  service:EmployeeserviceService;
  constructor(service:EmployeeserviceService)
  {
    this.service=service;
  }
  ngOnInit() {
    this.service.fetchEmp();
  }
  add(data:any)
  {
    
    this.createdEmp=new Emplo(data.eid,data.ename,data.esal,data.edep);
    this.service.add(this.createdEmp);
    this.createdFlag=true; 
  }
  submitted=false;
  onSubmit(){
    this.submitted=true;
  }
}


