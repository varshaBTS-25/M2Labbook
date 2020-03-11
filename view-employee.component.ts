import { Component, OnInit } from '@angular/core';
import {Emplo,EmployeeserviceService} from '../employeeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  service:EmployeeserviceService;
  constructor(service:EmployeeserviceService,public router:Router) { 
    this.service=service;
  }
  Employee:Emplo[]=[];
  delete(id:number)
  {
    this.service.delete(id);
   // this.Employee=this.service.getEmp();
  }
  ngOnInit(){
    this.service.fetchEmp();
    this.Employee=this.service.getEmp();
  }
  update(eid:number)
  {
    console.log('in view update');
    this.router.navigate(['app-updateemployee']);
  }
}
