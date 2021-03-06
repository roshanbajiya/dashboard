import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;
  employee: Employee;
  msg=' ';

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = new Employee();

    this.id = this.route.snapshot.params['id'];
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => {
        console.log(data);
        this.employee = new Employee();
        this.gotoList();
      }, error => console.log(error));
  }
  


  onSubmit() {
   
    this.employeeService.loginUserFromRemote(this.employee).subscribe(
      data=>{
                  console.log("response receuved");
                  this.updateEmployee();  
                // this.router.navigate(['/posts'])
      }
                ,
                error=>{console.log("exception error");
                this.msg=`Error:- Mobile Number  ${this.employee.emailId} you entered already exists. Type a different contact number and try again`;
      }
    )
       
   
    
        
  }
  


  // onSubmit() {
  //   this.updateEmployee();    
  // }

  gotoList() {
    this.router.navigate(['/employees']);
  }
}
