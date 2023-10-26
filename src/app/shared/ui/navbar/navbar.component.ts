import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuItems = [
    'Videos',
    'People',
    'Documents',
    'Events',
    'Communities',
    'Favorites',
    'Channels',
  ]
}
