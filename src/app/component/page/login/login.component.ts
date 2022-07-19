import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  EnebleRegist = true
  
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  
  ClickEvent(event: Event){
    document.querySelector('.btn')?.classList.add('btn_active');
    this.EnebleRegist = false;
  }

  ConsoleLog() {
    console.log('ok')
  }
}
