import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab-professional',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './tab-professional.component.html',
  styleUrl: './tab-professional.component.scss'
})
export class TabProfessionalComponent {
  professionalData = {
    position: '',
    department: '',
    hiringDate: '',
    contractType: '',
    salary: '',
    workingHours: '',
    benefits: '',
    supervisor: '',
    employeeId: ''
  };
}
