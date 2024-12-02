import { Routes } from '@angular/router';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'dashboard'},
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: 'employee/create', component: EmployeeCreateComponent },
  { path: 'employee/list', component: EmployeeListComponent }
];
