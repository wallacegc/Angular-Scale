import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab-personal',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './tab-personal.component.html',
  styleUrl: './tab-personal.component.scss'
})
export class TabPersonalComponent {
  personalData = {
    name: '',
    birthdate: '',
    gender: '',
    maritalStatus: '',
    idNumber: '',
    nationality: '',
    birthplace: '',
    photo: ''
  };
}
