import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  imports: [CommonModule, SidebarComponent, FormsModule],
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  searchText: string = '';

  isAddModalOpen = false;
  newEmployee: Employee = { id: '', name: '', email: '', phone: '', position: '' };

  isEditModalOpen = false;
  selectedEmployee: Employee | null = null;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
      this.filteredEmployees = data;
    });
  }

  onSearch(): void {
    if (!this.searchText.trim()) {
      this.filteredEmployees = this.employees;
      return;
    }

    this.filteredEmployees = this.employees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        employee.email.toLowerCase().includes(this.searchText.toLowerCase()) ||
        employee.position.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  openAddEmployeeModal() {
    this.isAddModalOpen = true;
    this.newEmployee = { id: '', name: '', email: '', phone: '', position: '' }; // Reset ข้อมูล
  }

  closeAddEmployeeModal() {
    this.isAddModalOpen = false;
  }

  openEditModal(employee: Employee) {
    if (!employee) return; // ป้องกันการเปิด Modal ถ้า employee ไม่มีค่า

    this.selectedEmployee = { ...employee }; // Clone ข้อมูลพนักงานที่เลือก
    this.isEditModalOpen = true;
  }

  closeEditModal() {
    this.isEditModalOpen = false;
    this.selectedEmployee = null; // Reset ค่าเมื่อปิด Modal
  }
}
