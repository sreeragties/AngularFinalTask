import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss'],
})
export class CreateEmployeeComponent implements OnInit {
  emp: any;
  body = new URLSearchParams();
  form!: FormGroup;
  
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      first_name: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      }),

      last_name: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      }),

      email: new FormControl(null, {
        validators: [Validators.required, Validators.email],
      }),

      phone: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.maxLength(10),
          Validators.minLength(10),
        ],
      }),

      organization: new FormControl(null, {
        validators: [Validators.required],
      }),

      designation: new FormControl(null, {
        validators: [Validators.required, Validators.pattern('[a-zA-Z ]*')],
      }),

      salary: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(4),
        ],
      }),
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    } else {
      console.warn(this.form.value);

      this.body.set('first_name', this.form.value['first_name']);
      this.body.set('last_name', this.form.value['last_name']);
      this.body.set('email', this.form.value['email']);
      this.body.set('phone', this.form.value['phone']);
      this.body.set('organization', this.form.value['organization']);
      this.body.set('designation', this.form.value['designation']);
      this.body.set('salary', this.form.value['salary']);

      this.userService.createEmployee(this.body).subscribe(
        (res) => {
          console.log('User Created!!');
          this.router.navigate(['list']);
        },
        (error: any) => console.log(error)
      );
    }
  }
}
