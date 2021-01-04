

import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup} from '@angular/forms';
import { EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';

import { first } from 'rxjs/operators';

declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  @Output() Submit = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  userForm: any;
  id: any;
  isEditMode: boolean = false;
  user : Employee;
  msg=' ';


  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    emailId: new FormControl('', [Validators.required,Validators.pattern("[0-9 ]{11}")]),

    
    
  
     });

  employee: Employee = new Employee();
  submitted = false;

  constructor(
    private employeeService: EmployeeService,
    private _fb: FormBuilder,
    private _ar: ActivatedRoute,
    private router: Router){
      this.user = new Employee();
  }

  
  ngOnInit() {
    
    this._ar.paramMap.subscribe(params => {
          console.log(params.get('id'));
          this.id = params.get('id');
          if(this.id !=undefined){
            this.isEditMode = true;
          } 
        })
      }
  employees:any = {}
  
 
  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  toggleTitle(){
    $('.title').slideToggle(); //
  }

  save() {
    this.employeeService
    .createEmployee(this.employee).subscribe(data => {
      console.log(data)
      this.employee = new Employee();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    if(this.submitted =true){}
    
     this.save(); 
    this.employeeService.loginUserFromRemote(this.employee).subscribe(
      data=>{
                  console.log("response receuved");
                 this.router.navigate(['/posts'])
      }
                ,
                error=>{console.log("exception error");
                this.msg=`Error:- Mobile Number i.e {${this.employee.emailId}} you entered already exists. Type a different contact number and try again`;
      }
    )
       
   
    
        
  }
  
  
 
  
}

