import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {
  text = 'Log-in'

  constructor() { }

  ngOnInit(): void {
  }

}
