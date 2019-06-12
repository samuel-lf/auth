import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private service: AuthService, private router: Router) { }

  canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.service.isAuthenticated().pipe(
      tap((b) => {
        if(!b){
          this.router.navigateByUrl('auth/login');
        }
      })
    );
  }

}
