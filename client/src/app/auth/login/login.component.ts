import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', [Validators.required, Validators.minLength(6)]]
  });
  loading = false;
  constructor(private fb: FormBuilder, private service: AuthService,
    private snackbar: MatSnackBar, private router: Router) { }

  ngOnInit() {
  }


  onSubmit() {
    const credentials = this.loginForm.value;
    this.loading = true;
    this.service.login(credentials).subscribe((u) => {
      console.log(u);
      this.snackbar.open('Logged in sucessfully! Welcome' + u.firstname + '!', "OK", { duration: 2000 })
      this.router.navigateByUrl('/');
      this.loading = false;
    }, (err) => {
      this.snackbar.open(err.error.message, "OK", { duration: 2000 })
      this.loading = false;
    })
  }

}
