import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/core/classes/user';
import { UserAddress } from 'src/app/shared/core/classes/user-address';
import { UserRib } from 'src/app/shared/core/classes/user-rib';
import { UserService } from 'src/app/shared/services/user/user.service';
import { AddressService } from 'src/app/shared/services/address/address.service';
import { RibService } from 'src/app/shared/services/rib/rib.service';


@Component({
  selector: 'apa-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {
  userId: number;
  selectedUser: User;
  selectedUserAddress: UserAddress;
  selectedUserRib: UserRib;
  userLoaded = false;
  userType = '';
  editedUser: User ;
  editedUserAddress: UserAddress;
  editedUserRib: UserRib;
  toggleDisplayInfoForm = false;
  toggleDisplayAddressForm = false;
  toggleDisplayRibForm = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private userAddressService: AddressService,
    private userRibService: RibService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      if (localStorage.getItem('userRole') === 'admin'){
        this.userId = +paramMap.get('userId');
      } else {
        this.userId = +localStorage.getItem('userId');
      }
      this.userType = paramMap.get('userType');
      this.getUser(this.userId);
    });
  }


  getAddress(id: number){
    this.userAddressService.getAddressById(id).subscribe((data: UserAddress) => {
      this.selectedUserAddress = data;
      this.editedUserAddress = data;
      return this.selectedUserAddress;
    });
  }

  getRib(id: number){
    this.userRibService.getRibById(id).subscribe((data: UserRib) => {
      this.selectedUserRib = data;
      this.editedUserRib = data;
      this.userLoaded = true;
      return this.selectedUserRib;
    });
  }

  getUser(id: number){
    this.userService.getUserById(id).subscribe((data: User) => {
      this.selectedUser = data;
      this.editedUser = {...data};
      this.getAddress(this.selectedUser.userAddress.id);
      this.getRib(this.selectedUser.userRib.id);
      return this.selectedUser;
    });
  }
  editClientInformation(){
    this.toggleDisplayInfoForm = true;
  }
  editClientAddress(){
    this.toggleDisplayAddressForm = true;
  }
  editClientRib(){
    this.toggleDisplayRibForm = true;
  }
  toggleDisplayForms(){
    this.toggleDisplayInfoForm = false;
    this.toggleDisplayAddressForm = false;
    this.toggleDisplayRibForm = false;
  }
  resetForm(){
    this.toggleDisplayForms();
    this.getUser(this.userId);
    this.editedUserAddress = {streetName: '', zipCode: '', cityName: ''};
    this.editedUserRib = {ownerName: '', bankName: '', ibanNumber: '', bicCode: ''};
    this.editedUser = {lastName: '', firstName: '', role: 'client', email: '', password: '', phoneNumber: '', companyName: '', siretNumber: '', sponsorshipCode: '', userType: null, userAddress: null, userRib: null};
  }
  onSubmitUser(){
    this.editedUser.userType = {id: +this.editedUser.userType};
    this.editedUser.projects = [];
    this.userService.putUserById(this.editedUser).subscribe(() => {
      this.resetForm();
    });
  }
  onSubmitAddress(){
    this.userAddressService.putAddressById(this.editedUserAddress).subscribe(() => {
      this.resetForm();
    });
  }
  onSubmitRib(){
    this.userRibService.putRibById(this.editedUserRib).subscribe(() => {
      this.resetForm();
    });
  }
  navigateToClientsList(){
    this.router.navigate(['/client-list']);
  }
  navigateToClientProjects(id){
    this.router.navigate([`/client-projects/${id}`]);
  }
}
