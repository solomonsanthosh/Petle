import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder, public auth: AngularFireAuth,private router: Router) {}
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.minLength(6)),
      name: new FormControl('', Validators.required),
    });
  }
  
  submitForm() {
    const { email, password } = this.registerForm.value;
    this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) =>this.router.navigate(['']));
    console.log(this.registerForm.value);
  }
}
