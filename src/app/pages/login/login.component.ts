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

  email:string;
  password:string;

  constructor(private router :Router) { }


  ngOnInit(): void {

  }

  valider(mail : string, passw : string): void{

// tester si login est bon
    this.email = mail;
    this.password = passw;
    console.log(this.email);
    console.log(this.password);

//  if  get(email,passw);

//this.redirect();


  }

  redirect(): void{

    this.router.navigate(['user']);
  }


}
