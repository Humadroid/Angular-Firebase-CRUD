import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
  employeeList: AngularFireList<any>;
  selectedEmployee: Employee = new Employee();
  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.employeeList = this.firebase.list('employees');
    return this.employeeList;
  }

  insertEmployee(empoloyee: Employee) {
    this.employeeList.push({
      name: empoloyee.name,
      position: empoloyee.position,
      office: empoloyee.office,
      salary: empoloyee.salary
    });
  }

  updateEmployee(emp: Employee) {
    this.employeeList.update(emp.$key, {
      name: emp.name,
      position: emp.position,
      office: emp.office,
      salary: emp.salary
    });
  }

  deleteEmployee(key: string) {
    this.employeeList.remove(key);
  }

}
