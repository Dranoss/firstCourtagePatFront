import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/shared/core/classes/user';
import { UserType } from 'src/app/shared/core/classes/userType';
import { TypeOfUserService } from 'src/app/shared/services/typeUser/type-of-user.service';
import { UserService } from 'src/app/shared/services/user/user.service';
import { TypeUserCardComponent } from '../typeUserCard/type-user-card/type-user-card.component';
import { Address } from 'src/app/shared/core/classes/user-address';




@Component({
  selector: 'apa-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  typeOfUsers: UserType[] = [];
  user: User;
  form;
  isCreated = false;

  constructor(public dialogRef: MatDialogRef<UserCardComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private userCardService: UserService,
              private typeOfUserService: TypeOfUserService,
              private dialog: MatDialog) {

  }

  ngOnInit(): void {
    // initialize liste of types users
    this.getTypeOfUsers();

    // open the dialog as null to create a user
    if (this.data === null) {
      this.isCreated = false;

      this.form = new FormGroup({

        lastName: new FormControl('', Validators.required),
        firstName: new FormControl('', Validators.required),
        email: new FormControl('', Validators.email),
        phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
        password: new FormControl(''),
        companyName: new FormControl(''),
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
    // open the dialog as data known to update a user
    else {
      this.isCreated = true;
      this.user = this.data;

      this.form = new FormGroup({

        lastName: new FormControl(this.user.lastName),
        firstName: new FormControl(this.user.firstName),
        email: new FormControl(this.user.email),
        phoneNumber: new FormControl(this.user.phoneNumber), // , [Validators.required, Validators.minLength(10)]
        password: new FormControl(this.user.password),
        companyName: new FormControl(this.user.companyName),
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
        userTypeForm: new FormControl(this.user.userType, Validators.required)
       // userTypeForm: new FormControl({ id: this.user.userType }, Validators.required)

      });


    }

  }

  compareObjects(o1: any, o2: any) {
    if (o1?.id == o2?.id) {
      return true;
    }
    else { return false; }
  }

  // method which initialize the select list of type of users
  getTypeOfUsers() {

    this.typeOfUserService.getTypeOfUsers()
      .subscribe(data => {
        this.typeOfUsers = data;
      });

  }

  // call a dialog to post a new type of user
  addTypeOfUser() {


    const ref = this.dialog.open(TypeUserCardComponent);
    ref.afterClosed().subscribe(result => {
      this.getTypeOfUsers();
    });

  }

  // statements which post a new User
  onValidate() {
    this.user = new User(
      'client',
      this.form.get('userTypeForm')?.value,
      this.form.get('lastName')?.value,
      this.form.get('firstName')?.value,
      this.form.get('email')?.value,
      this.form.get('phoneNumber')?.value,
      this.form.get('password')?.value,
      this.form.get('companyName')?.value,
      this.form.get('siretNumber')?.value,
      this.form.get('sponsorshipCode')?.value,
      null,
      this.form.get('rib')?.value);


    // Creer l adresse
    this.user.address = new Address(this.form.get('addressNumber')?.value,
      this.form.get('street')?.value,
      this.form.get('zipCode')?.value,
      this.form.get('city')?.value,
    );
    // Creer le userType

    this.user.userType = new UserType('', this.user.userType.id);

    this.userCardService.postUser(this.user).subscribe(data => {
      this.dialogRef.close('Close');

    });



  }

  // statements which put a User
  modifyUserDetails(): void {

    this.user = new User(
      this.user.role,
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
      this.form.get('rib')?.value,
      this.user.id = this.data.id);

 //   this.user.userType = new UserType('', this.user.userType.id);
 this.user.userType = {"id" : this.user.userType.id} as UserType;


    this.userCardService.putUserById(this.user).subscribe(data => {
      this.dialogRef.close('Close');


    });

  }
}
