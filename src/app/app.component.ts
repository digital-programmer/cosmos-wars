import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HOME_ROUTE } from './routes/feature-routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cosmos-wars';
  constructor(private router: Router) {
    this.router.navigate([HOME_ROUTE.path]);
  }
}
