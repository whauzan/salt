import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent {
  @Input() type!: "video" | "people" | "document";
  @Input() isFirst: boolean = false;
  @Input() title!: string;
  @Input() author!: string;
  @Input() views!: number;
}
