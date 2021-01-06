import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { CreateEmployeeComponent } from 'src/app/modules/create-employee/create-employee.component';
import { EmployeeListComponent } from 'src/app/modules/employee-list/employee-list.component';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(  ) {
   
   }

  ngOnInit() {
  }


 
}
