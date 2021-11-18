import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { UserService } from './user.service';
import { User } from './user';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [UserService],
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAll() should GET all data', () => {
    const data = [
      {
        id: 3,
        first_name: 'Sreerag',
        last_name: 'T S',
        email: 'sreerag@mail.com',
        phone: '1234567899',
        organization: 'gadgeon',
        designation: 'Engineer',
        salary: 12345,
      },
      {
        id: 2,
        first_name: 'hello',
        last_name: 'user',
        email: 'hello@mail.com',
        phone: '1111111111',
        organization: 'Hello Company',
        designation: 'User Test',
        salary: 12345,
      },
      {
        id: 1,
        first_name: 'adasd',
        last_name: 'adr',
        email: 'adada@mail.com',
        phone: '1111111111',
        organization: 'adcad',
        designation: 'asdad',
        salary: 2333,
      },
    ];

    service.getEmployeesList().subscribe((res) => {
      expect(res).toEqual(data);
    });

    const req = httpMock.expectOne('http://localhost:5000/api/v1/employees/');
    expect(req.request.method).toEqual('GET');
    req.flush(data);

    httpMock.verify();
  });

  describe('#getAll', () => {
    it('returned Observable should match the right data', () => {
      const data = [
        {
          id: 12,
          first_name: 'Test',
          last_name: 'User',
          email: 'testuser@mail.com',
          phone: '1234567899',
          organization: 'TestOrg',
          designation: 'desig',
          salary: 18000,
        },
        {
          id: 13,
          first_name: 'Test2',
          last_name: 'User2',
          email: 'testuser2@mail.com',
          phone: '1234567899',
          organization: 'TestOrg',
          designation: 'desig',
          salary: 18000,
        },
      ];

      service
        .getEmployeesList()

        .subscribe((user) => {
          expect(user[0].first_name).toEqual('Test');

          expect(user[0].salary).toEqual(18000);

          expect(user[1].first_name).toEqual('Test2');

          expect(user[1].last_name).toEqual('User2');
        });

      const req = httpMock.expectOne('http://localhost:5000/api/v1/employees/');

      req.flush(data);

      httpMock.verify();
    });
  });

  describe('Testing POST method', () => {
    it('returned Observable should match the right data', () => {
      const data = {
        id: 12,
        first_name: 'Test',
        last_name: 'User',
        email: 'testuser@mail.com',
        phone: '1234567899',
        organization: 'TestOrg',
        designation: 'desig',
        salary: 18000,
      };

      service.createEmployee({ id: 12 }).subscribe((user: User) => {
        expect(user.first_name).toEqual('Test');
      });

      const req = httpMock.expectOne('http://localhost:5000/api/v1/employees/');

      expect(req.request.method).toEqual('POST');

      req.flush(data);
    });
  });

  describe('Testing Get Element By ID', () => {
    it('Should get the first name of user', () => {
      service.getEmployeeById(1).subscribe((data: any) => {
        expect(data.first_name).toBe('Sreerag');
      });

      const req = httpMock.expectOne(
        `http://localhost:5000/api/v1/employees/1`
      );
      expect(req.request.method).toBe('GET');

      req.flush({
        first_name: 'Sreerag',
      });

      httpMock.verify();
    });
  });
});
