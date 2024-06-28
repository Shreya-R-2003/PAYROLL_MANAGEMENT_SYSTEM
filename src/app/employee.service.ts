import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: any[] = [];

  constructor() {
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      this.employees = JSON.parse(storedEmployees);
    }
  }

  getEmployees(): any[] {
    return this.employees;
  }

  getEmployeeById(id: number): any {
    return this.employees.find(emp => emp.id === id);
  }

  addEmployee(employee: any): void {
    this.employees.push(employee);
    this.saveEmployees();
  }

  updateEmployee(updatedEmployee: any): void {
    const index = this.employees.findIndex(emp => emp.id === updatedEmployee.id);
    if (index !== -1) {
      this.employees[index] = updatedEmployee;
      this.saveEmployees();
    }
  }

  private saveEmployees(): void {
    localStorage.setItem('employees', JSON.stringify(this.employees));
  }

  getEmployeeSalaryDetails(id: number): any {
    const employee = this.getEmployeeById(id);
    return employee ? employee.salaryDetails : null;
  }
}
