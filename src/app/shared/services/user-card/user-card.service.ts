import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserCardService {

  constructor() { }
  form: FormGroup = new FormGroup({

    $key: new FormControl(null),
    role: new FormControl('client'),
    type: new FormControl(0),
    lastName: new FormControl(''),
    firstName: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    password: new FormControl(''),
    societyName: new FormControl(''),
    siretNumber: new FormControl(''),
    sponsorshipCode: new FormControl(''),
    address: new FormControl(null),
    rib: new FormControl(null),


  });

}
