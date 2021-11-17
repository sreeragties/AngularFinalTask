import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss'],
})
export class ViewDetailsComponent implements OnInit {
  employees: User[];

  body = new URLSearchParams();
  constructor(private userService: UserService, private router: Router) {
    this.employees = [];
  }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.userService.getEmployeesList().subscribe(
      (data) => {
        console.log('Retrieved all employees');
        this.employees = data;
      },
      (error: any) => console.log(error)
    );
  }

  private getEmployees() {
    this.userService.getEmployeesList().subscribe((data) => {
      this.employees = data;
    });
  }

  employeeDetails(id?: number) {
    this.router.navigate(['details', id]);
  }

  deleteEmployee(id: number = 0) {
    this.userService.deleteEmployee(id).subscribe((data) => {
      this.getEmployees();
    });
  }
}
