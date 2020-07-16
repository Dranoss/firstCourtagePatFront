import { Component, OnInit, ResolvedReflectiveFactory } from '@angular/core';
import { Router } from '@angular/router';
import { log } from 'util';
import { User } from 'src/app/shared/core/classes/user';

@Component({
  selector: 'apa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private router: Router) { }


  ngOnInit(): void {

  }

  valider(): void{

    console.log(this.email);
    console.log(this.password);


  }

  redirect(): void{

    this.router.navigate(['user']);
  }


}
