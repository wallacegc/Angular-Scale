import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Employee } from '../../model/employee';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatTableModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {

  employees: Employee[] = [
    { id: 1, name: "Wallace Gomes Correa", prof: "Artzt"}
  ];


  displayedColumns: string[] = ['name', 'prof'];
}
