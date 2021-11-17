import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-individual-details',
  templateUrl: './view-individual-details.component.html',
  styleUrls: ['./view-individual-details.component.scss'],
})
export class ViewIndividualDetailsComponent implements OnInit {
  id: number;
  employee: User[] = [];

  constructor(
    private route: ActivatedRoute,
    private employeeService: UserService
  ) {
    this.id = 1;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.employeeService.getEmployeeById(this.id).subscribe((data) => {
      this.employee = data;
    });
  }
}
