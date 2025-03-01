import { Routes, provideRouter } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MenusComponent } from './pages/menus/menus.component';
import { EmployeesComponent } from './pages/employees/employees.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'menus', component: MenusComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [];

export const routing = provideRouter(routes);