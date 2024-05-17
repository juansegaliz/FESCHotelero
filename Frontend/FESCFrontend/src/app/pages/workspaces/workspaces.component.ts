import { Component } from '@angular/core';
import { WorkspacecardComponent } from '../../components/workspacecard/workspacecard.component';

@Component({
  selector: 'Ffr-workspaces',
  standalone: true,
  imports: [ WorkspacecardComponent ],
  templateUrl: './workspaces.component.html',
  styleUrl: './workspaces.component.scss'
})
export class WorkspacesComponent {

}
