import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'Ffr-workspacecard',
  standalone: true,
  imports: [],
  templateUrl: './workspacecard.component.html',
  styleUrl: './workspacecard.component.scss'
})
export class WorkspacecardComponent {
  @Input() image: string = "";
  @Input() title: string = "";
  
  constructor(private router: Router) { }

  cardOnClick() {
    this.router.navigate(['/']);
  }
}
