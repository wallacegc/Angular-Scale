import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {
  employees = [
    {
      photo: 'https://via.placeholder.com/100x100.png',
      name: 'John Silva',
      birthDate: '10/10/1990',
      department: 'Nursing'
    },
    {
      photo: 'https://via.placeholder.com/100x100.png',
      name: 'Maria Oliveira',
      birthDate: '22/05/1985',
      department: 'Nursing'
    },
    {
      photo: 'https://via.placeholder.com/100x100.png',
      name: 'Ana Costa',
      birthDate: '05/02/1992',
      department: 'Nursing'
    }
  ];
}
