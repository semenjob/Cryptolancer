import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  hide = true;
  logIn = new FormControl('');
  signIn = new FormControl ('');
  email = new FormControl('');
  password = new FormControl('');
  
  registerForm!: FormGroup;

 
  SaveForm() {
    if (this.registerForm.status == 'VALID') {
        
    }
    
    console.log(JSON.stringify(this.registerForm.value))
  }

  
  ngOnInit(): void {
  this.registerForm = new FormGroup({
    logIn: new FormControl(" ", [Validators.required, Validators.minLength(5),]),
    signIn: new FormControl(" ", [Validators.required, Validators.minLength(5)]),
    email: new FormControl(" ", [Validators.required, Validators.email]),
    password: new FormControl(" ", [Validators.required, Validators.minLength(5)])
  })
  }
  onSubmit() {

  }
}
