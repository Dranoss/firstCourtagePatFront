import { Component, OnInit } from '@angular/core';
import { UserCardService } from 'src/app/shared/services/user-card/user-card.service';
import { TypeUser } from 'src/app/shared/core/classes/typeUser';
import { UserService } from 'src/app/shared/services/user/user.service';
import { User } from 'src/app/shared/core/classes/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TypeOfUserService } from 'src/app/shared/typeUser/type-of-user.service';


@Component({
  selector: 'apa-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

   typeOfUsers: TypeUser[]=[];
   user;

  constructor(private userCardService: UserCardService,private typeOfUserService: TypeOfUserService) { }
  form: FormGroup = new FormGroup({


    role: new FormControl('client'),
    lastName: new FormControl('',Validators.required),
    firstName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.email),
    phoneNumber: new FormControl('',[Validators.required,Validators.minLength(10)]),
    password: new FormControl(''),
    societyName: new FormControl(''),
    siretNumber: new FormControl(''),
    sponsorshipCode: new FormControl(''),
    address: new FormControl(null),
    rib: new FormControl(null),
    typeUser: new FormControl(null,Validators.required)


  });

  ngOnInit(): void {

     // initialize liste of types users
     this.getTypeOfUsers();

  }

  getTypeOfUsers(){

        this.typeOfUserService.getTypeOfUsers()
        .subscribe(data =>{ this.typeOfUsers = data});

  }
  onValidate(){
  this.user = this.form;
 // this.userCardService.addUser(this.user);

  }

  modifyUserDetails(): void {

    // this.userService.putUser().subscribe(data => {
    //   console.log('update le projet ' + this.selectedProject.name);
    //   this.selectedProject = data;

    // });
    // // this.getTheUserList();

  }
}
