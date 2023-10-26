import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  menuItems = [
    'About',
    'For Business',
    'Suggestions',
    'Help & FAQs',
    'Contacts',
    'Pricing',
  ]
}
