import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpHeaders } from '@angular/common/http';
import { User } from './user';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseURL = 'http://localhost:5000';
  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  };

  getEmployeesList(): Observable<any[]> {
    return this.httpClient.get<User[]>(this.baseURL+ '/api/v1/employees/');
  }

  createEmployee(employee: any): Observable<Object> {
    console.log(employee);
    return this.httpClient.post(
      this.baseURL+ '/api/v1/employees/',
      employee,
      this.httpOptions
    );
  }

  getEmployeeById(id: number): Observable<User[]> {
    console.log(this.baseURL+ '/api/v1/employees/' + id);
    return this.httpClient.get<User[]>(this.baseURL+ '/api/v1/employees/' + id);
  }

  updateEmployee(id: number, employee: User): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object> {
    return this.httpClient.delete(this.baseURL+ '/api/v1/employees/' + id);
  }
}
