import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  http:HttpClient;
  Employee:Emplo[]=[];

  constructor(http:HttpClient) {
    this.http=http;
   }
   fetched:boolean=false;
   fetchEmp()
   {
     this.http.get('./assets/Employee.json').subscribe(
       data=>{
         if(!this.fetched){
           this.convert(data);
           this.fetched=true;
         }
       }
     );
   }
   getEmp():Emplo[]
   {
     return this.Employee;
   }

   convert(data:any){
     for(let o of data){
       let e=new Emplo(o.id,o.name,o.salary,o.department);
       this.Employee.push(e);
     }
   }

   delete(eid:number)
   {
     let key:number=-1;
     for(let i=0;i<this.Employee.length;i++)
     {
       let e=this.Employee[i];
       if(eid==e.id){
         key=i;
         break;
       }
     }
     this.Employee.splice(key,1);
   }
   update(eid:any){
     for(let i=0;i<this.Employee.length;i++){
       let e=this.Employee[i];
       if(eid.id==e.id){
         console.log(eid.name);
         this.Employee.splice(i,1);
         this.Employee.push(eid);
         console.log(e.name);
         break;
       }
     }
   }
   add(e:Emplo)
   {
     this.Employee.push(e);
   }
}
export class Emplo{
  id:number;
  name:string;
  salary:number;
  department:string;
  constructor(id:number,name:string,salary:number,department:string)
  {
    this.id=id;
    this.name=name;
    this.salary=salary;
    this.department=department;
  }
}
