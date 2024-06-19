import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  redirectToLogin() {
    window.location.href = '/pages/authentication/login';
  }
}
