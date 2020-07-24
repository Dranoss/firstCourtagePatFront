import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'apa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userModel = {email: '', password: ''};

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.authService.login(this.userModel);
  }
}
