import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './template.html',
  styleUrls: ['./style.css']
})
export class LoginComponent implements OnInit {

  hidePassword = true;


  constructor() { }

  ngOnInit() {
  }

}
