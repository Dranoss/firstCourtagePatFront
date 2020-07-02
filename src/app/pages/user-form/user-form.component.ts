import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import { UserService } from 'src/app/shared/services/user/user.service';
import { User } from 'src/app/shared/core/classes/user';
import { Observable } from 'rxjs';
import { Project } from 'src/app/shared/core/classes/project';
import { TypeProject } from 'src/app/shared/core/classes/typeProject';
import { ProjectService } from 'src/app/shared/services/project/project.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'apa-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  users: User[];
  listOfUsers: MatTableDataSource<any>;
  project: Project = new Project();
  projects: Project[];
  projectsAll: Project[];
  selected: User;
  headers: string[];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  selectedProject: Project;
  selectedAll: Project[];
  selectedOneProject: Project;
  selectedType: TypeProject;
  typeProjects: TypeProject[];

  userClicked = false;

  searchKey: string;

  constructor(private userService: UserService,
    private projectService: ProjectService,
    private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.headers = ['Nom', 'Prénom', 'Email', 'Téléphone', 'Société', 'actions'];

    // Initialize users' list and types project's list
    this.getTheUserList();
    //  this.getTypeOfProjects();
  }

  public getTheUserList() {
    this.userService.getUsers().subscribe(data => {
      //this.users = data;
      this.listOfUsers = new MatTableDataSource(data);
      this.listOfUsers.sort = this.sort;
      this.listOfUsers.paginator = this.paginator;
    });

  }
  public getTypeOfProjects() {

    this.projectService.getTypeProjects().subscribe(data => {
      this.typeProjects = data;
      console.log(data);
    });

  }


  // public getTypeProjects(): Observable<TypeProject[]> {
  //   return this.typeProjectService.getTypeProjects();
  // }

  public getProjectsByUser() {
    //      this.getProjectsByUser(this.selected);
    // console.log('======>  salut le userid selectionne ==========>' + this.selected.id);
    // this.userService.getProjectsByUserId(this.selected.id);

    this.projectService.getProjectsByUserId(this.selected.id).subscribe(data => {
      this.projects = data;
      data.length === 0 ? this.userClicked = false : this.userClicked = true;
    });

  }

  public getListAllProjects() {
    this.getProjects().subscribe(data => {
      this.projectsAll = data;
      console.log(data);
    });
  }

  public getProjects(): Observable<Project[]> {

    return this.projectService.getAllProjects();
  }



  clickOnUser(): void {
    this.getProjectsByUser();


  }


  deleteUser(user: User) {

    this.userService.deleteUserById(user.id).subscribe(data => {
      console.log('delete  le client ' + user);

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
    this.dialog.open(UserFormComponent);
  }

}
