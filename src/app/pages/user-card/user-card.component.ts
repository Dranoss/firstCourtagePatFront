import { Component, OnInit, Type, Inject } from '@angular/core';
import { UserService } from 'src/app/shared/services/user/user.service';
import { User } from 'src/app/shared/core/classes/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserType } from 'src/app/shared/core/classes/userType';
import { TypeOfUserService } from 'src/app/shared/services/typeUser/type-of-user.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'apa-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  typeOfUsers: UserType[] = [];
  user: User;
  idType: number;
  typeUser: UserType;

  form;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private userCardService: UserService,
    private typeOfUserService: TypeOfUserService) {

  }

  ngOnInit(): void {
    this.getTypeOfUsers();

    // initialize liste of types users
    if (this.data === null) {
      this.form = new FormGroup({

        lastName: new FormControl('', Validators.required),
        firstName: new FormControl('', Validators.required),
        email: new FormControl('', Validators.email),
        phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
        password: new FormControl(''),
        societyName: new FormControl(''),
        siretNumber: new FormControl(''),
        sponsorshipCode: new FormControl(''),
        addressNumber: new FormControl(null),
        street: new FormControl(''),
        zipCode: new FormControl(''),
        city: new FormControl(''),
        iban: new FormControl(''),
        bic: new FormControl(''),
        ownerFullname: new FormControl(''),
        bankName: new FormControl(''),
        userTypeForm: new FormControl(null, Validators.required)

      });


    }
    else {
      this.user = this.data;

      this.form = new FormGroup({

        lastName: new FormControl(this.user.lastName, Validators.required),
        firstName: new FormControl(this.user.firstName, Validators.required),
        email: new FormControl(this.user.email, Validators.email),
        phoneNumber: new FormControl(this.user.phoneNumber, [Validators.required, Validators.minLength(10)]),
        password: new FormControl(this.user.password),
        societyName: new FormControl(this.user.companyName),
        siretNumber: new FormControl(this.user.siretNumber),
        sponsorshipCode: new FormControl(this.user.sponsorshipCode),
        addressNumber: new FormControl(this.user.address?.addressNumber),
        street: new FormControl(this.user.address?.street),
        zipCode: new FormControl(this.user.address?.zipCode),
        city: new FormControl(this.user.address?.city),
        iban: new FormControl(this.user.rib?.iban),
        bic: new FormControl(this.user.rib?.bic),
        ownerFullname: new FormControl(this.user.rib?.ownerFullname),
        bankName: new FormControl(this.user.rib?.bankName),
        userTypeForm: new FormControl(this.user.userType?.name, Validators.required)

      });


      this.idType = this.user.userType.id;



    }

  }

  getTypeOfUsers() {

    this.typeOfUserService.getTypeOfUsers()
      .subscribe(data => {
        this.typeOfUsers = data;
      });

  }



  onValidate() {

    this.idType = +this.form.get('userTypeForm').value;

      this.user = new User(
        'admin',
        this.form.get('userTypeForm')?.value,
        this.form.get('lastName')?.value,
        this.form.get('firstName')?.value,
        this.form.get('email')?.value,
        this.form.get('phoneNumber')?.value,
        this.form.get('password')?.value,
        this.form.get('companyName')?.value,
        this.form.get('siretNumber')?.value,
        this.form.get('sponsorshipCode')?.value,
        this.form.get('address')?.value,
        this.form.get('rib')?.value);

        this.user.userType = new UserType(this.idType, ''),
        this.userCardService.postUser(this.user);


  }

  modifyUserDetails(): void {


    this.user = new User(
      'client',
      this.form.get('userTypeForm'),
      this.form.get('lastName')?.value,
      this.form.get('firstName')?.value,
      this.form.get('email')?.value,
      this.form.get('phoneNumber')?.value,
      this.form.get('password')?.value,
      this.form.get('companyName')?.value,
      this.form.get('siretNumber')?.value,
      this.form.get('sponsorshipCode')?.value,
      this.form.get('address')?.value,
      this.form.get('rib')?.value);

    this.userCardService.putUserById(this.user).subscribe(data => {

    });
    // this.getTheUserList();

  }
}
