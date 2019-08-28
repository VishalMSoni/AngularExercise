import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerbar',
  templateUrl: './headerbar.component.html',
  styleUrls: ['./headerbar.component.scss']
})
export class HeaderbarComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private route: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.signOut().subscribe(() => {
      localStorage.clear();
      this.route.navigateByUrl('/');
    });
  }
}
