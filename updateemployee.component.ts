import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {
  service:EmployeeserviceService;
  constructor(service:EmployeeserviceService,public router:Router) {
    this.service=service;
   }

  ngOnInit(): void {
  }
  update(e:any)
  {
    this.service.update(e);
    console.log("in update upadte")
    this.router.navigate(['app-view-employee']);
  }
}
