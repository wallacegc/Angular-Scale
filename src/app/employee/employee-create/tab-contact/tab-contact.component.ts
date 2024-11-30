import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab-contact',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './tab-contact.component.html',
  styleUrl: './tab-contact.component.scss'
})
export class TabContactComponent {
  contactData = {
    address: '',
    phone: '',
    email: '',
    socialMedia: ''
  };
}
