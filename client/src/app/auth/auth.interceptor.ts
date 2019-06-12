import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private service: AuthService, private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (localStorage.getItem('token')) {
            let token = localStorage.getItem('token');
            const authReq = req.clone({
                setHeaders: {
                    Authorization: token
                }
            });
            return next.handle(authReq).pipe(catchError((error) => {
                if(error instanceof HttpErrorResponse){
                    if(error.status === 401){
                        this.service.logout();
                        this.router.navigateByUrl('/auth/login');
                    }
                }
                return throwError(error);
            }));
        }
        return next.handle(req);
    }
}