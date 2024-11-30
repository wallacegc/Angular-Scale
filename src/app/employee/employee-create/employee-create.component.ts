import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TabContactComponent } from './tab-contact/tab-contact.component';
import { TabPersonalComponent } from './tab-personal/tab-personal.component';
import { TabProfessionalComponent } from './tab-professional/tab-professional.component';

@Component({
  selector: 'app-employee-create',
  standalone: true,
  imports: [
    NgFor,
    CommonModule,
  ],
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent {
  tabs = [
    { title: 'Personal', component: TabPersonalComponent },
    { title: 'Contact', component: TabContactComponent },
    { title: 'Professional', component: TabProfessionalComponent }
  ];

  selectedTab = 0;

  selectTab(index: number): void {
    console.log('Aba selecionada: ', index);  // Para depuração
    this.selectedTab = index;
  }

}
