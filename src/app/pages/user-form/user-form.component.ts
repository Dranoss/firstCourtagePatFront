import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/shared/core/classes/user';
import { UserService } from 'src/app/shared/services/user/user.service';
import { UserCardComponent } from '../user-card/user-card.component';
import { MatSortModule } from "@angular/material/sort";
import { UserType } from 'src/app/shared/core/classes/userType';
import { TypeOfUserService } from 'src/app/shared/services/typeUser/type-of-user.service';
import { element } from 'protractor';

@Component({
  selector: 'apa-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  users: User[];
  listOfUsers: MatTableDataSource<User>;
  headers: string[];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  type: UserType;

  constructor(private userService: UserService,
    private typeOfUserService: TypeOfUserService,
    private dialog: MatDialog) {

  }


  ngOnInit(): void {

    this.headers = ['lastName', 'firstName', 'userType.name', 'sponsorshipCode', 'Email', 'Téléphone',
      'Société', 'actions'];

    // Initialize users' list and types project's list
    this.getTheUserList();

  }

  public getTheUserList() {

    this.userService.getUsers().subscribe(data => {

      // recuperer le tableau des types clients avec valeur

      data.forEach(element => {
        this.typeOfUserService.getTypeOfUsersById(Number(element.userType))
          .subscribe(typus => {
            element.userType = new UserType(typus.name, typus.id);
          });

      });
      this.listOfUsers = new MatTableDataSource(data);
      this.listOfUsers.sort = this.sort;
      this.listOfUsers.paginator = this.paginator;


    });

  }


  deleteUser(user: User) {

    this.userService.deleteUserById(user.id).subscribe(data => {
      this.getTheUserList();
    });
  }

  onSearchClear() {
    this.searchKey = '';
    this.filter();
  }
  filter() {
    this.listOfUsers.filter = this.searchKey.trim().toLowerCase();
  }

  addUser() {
    let dialogRef = this.dialog.open(UserCardComponent, { data: null });
    dialogRef.afterClosed().subscribe(result => {
      this.getTheUserList();
    });
  }

  modifyUser(user: User) {
    const dialogRef = this.dialog.open(UserCardComponent, { data: user });
    dialogRef.afterClosed().subscribe(result => {
      this.getTheUserList();
    });

  }


}
