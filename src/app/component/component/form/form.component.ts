import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  hide = true;
  LogIn = new FormControl('');
  SignIn = new FormControl ('');
  Email = new FormControl('');
  Password = new FormControl('');
  
  RegisterForm!: FormGroup;

  getErrorMessage() {
    if (this.LogIn.hasError('required')) {
      return 'You must enter a value';
    } 
    if (this.SignIn.hasError('required')) {
      return 'You must enter a value';
    } 
    if (this.Email.hasError('required')) {
      return 'You must enter a value';
    } 
    if (this.Password.hasError('required')) {
      return 'You must enter a value';
    } 
    return  'Not a valid ';
  }

  SaveForm() {
    if (this.RegisterForm.status == 'INVALID') {
      alert('Не верно заполненна форма')
    }
    console.log(JSON.stringify(this.RegisterForm.value))
  }

  
  ngOnInit(): void {
  this.RegisterForm = new FormGroup({
    LogIn: new FormControl(" ", [Validators.required, Validators.minLength(5)]),
    SignIn: new FormControl(" ", [Validators.required, Validators.minLength(5)]),
    Email: new FormControl(" ", [Validators.required, Validators.email]),
    Password: new FormControl(" ", [Validators.required, Validators.minLength(5)])
  })
  }
}
