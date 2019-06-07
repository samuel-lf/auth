import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister = this.fb.group({
    'firstname': ['', [Validators.required]],
    'lastname': ['', [Validators.required]],
    'address': ['', [Validators.required]],
    'city': ['', [Validators.required]],
    'state': ['', [Validators.required]],
    'phone': ['', [Validators.required]],
    'mobilephone': ['', [Validators.required]],
    'email': ['', [Validators.required, Validators.email]],
    'password1': ['', [Validators.required, Validators.minLength(6)]],
    'password2': ['', [Validators.required, Validators.minLength(6)]],
  }, {validator: this.matchingPassword});

  states = [
    'AC','AL','AP',
    'AM','BA','CE',
    'DF','ES','GO',
    'MA','MT','MS',
    'MG','PA','PB',
    'PR','PE','PI',
    'RJ','RN','RS',
    'RO','RR','SC',
    'SP','SE','TO'
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  matchingPassword(group: FormGroup){
    if(group){
      const password1 = group.controls['password1'].value;
      const password2 = group.controls['password2'].value;
      if(password1 == password2){
        return null;
      }
    }
    return {matching: false};
  }

  onSubmit(){

  }

}
