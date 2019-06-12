import { AuthGuardService } from './auth/auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch:'full', redirectTo:'/main/people' },
    { path: 'main', loadChildren:'./main/main.module#MainModule', canActivate: [AuthGuardService] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
