import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees: Employee[] = [
    { id: 'MT001', name: 'รุ่นใหญ่ ใจบาง', email: 'xzc.s@gmail.com', phone: '093-000-0000', position: 'พนักงาน' },
    { id: 'MT002', name: 'พี่ฉุนวะน้อง', email: 'lloyd.s@gmail.com', phone: '093-000-0000', position: 'พนักงาน' },
  ];

  constructor() {}

  getEmployees(): Observable<Employee[]> {
    return of([...this.employees]); // ใช้ spread operator ป้องกันการแก้ไข array ต้นฉบับ
  }
}
