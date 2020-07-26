import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

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
