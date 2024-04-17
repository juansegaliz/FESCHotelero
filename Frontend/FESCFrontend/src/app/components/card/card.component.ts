import { Component, Input } from '@angular/core';

@Component({
  selector: 'Ffr-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() title: string = '';
  @Input() textButton: string = '';
  @Input() image: string = '';
}
