import { Router } from '@angular/router';
import { User } from './auth/models/user';
import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  authenticated$: Observable<boolean>;
  user$: Observable<User>;

  constructor(private Authservice: AuthService, private router: Router) {
    this.authenticated$ = this.Authservice.isAuthenticated();
    this.user$ = this.Authservice.getUser();
  }

  logout(){
    this.Authservice.logout();
    this.router.navigateByUrl('/auth/login');
  }
}
