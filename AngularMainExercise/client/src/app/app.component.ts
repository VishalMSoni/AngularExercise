import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './auth/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showBar: boolean;
  constructor(private route: Router, private authService: AuthenticationService) { }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    if (!!this.authService.getToken()) {
      this.route.navigateByUrl('/dashboard');
    }
  }

  changeOfRoutes() {
    if (this.route.url === '/' || this.route.url === '/login') {
      this.showBar = false;
    } else {
      this.showBar = true;
    }
  }
}
