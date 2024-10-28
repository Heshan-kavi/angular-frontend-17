import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'employee', loadComponent: () => import ('../app/employee/employee.component').then(c => c.EmployeeComponent)},
];
