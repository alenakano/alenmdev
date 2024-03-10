import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DownButtonComponent } from './base/down-button/down-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    DownButtonComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'alexnmdev';
}
