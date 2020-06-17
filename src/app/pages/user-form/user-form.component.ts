import { Component, OnInit, Injectable } from '@angular/core';
import { UserService } from 'src/app/shared/services/user/user.service';
import { User } from 'src/app/shared/core/classes/user';
import { Observable } from 'rxjs';
import { Project } from 'src/app/shared/core/classes/project';
import { TypeProject } from 'src/app/shared/core/classes/typeProject';
import { ProjectService } from 'src/app/shared/services/project/project.service';

@Component({
  selector: 'apa-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  users: User[];
  project: Project;
  projects: Project[];
  projectsAll: Project[];
  selected: number;
  selectedProject: Project;
  selectedAll: Project[];
  selectedOneProject: Project;
  selectedType: TypeProject;
  typeProjects: TypeProject[];


  constructor(private userService: UserService, private projectService: ProjectService) {

  }

  ngOnInit(): void {


    // tous les users
    this.getUsers().subscribe(data => {
      this.users = data;
      for (const user of this.users) {
        console.log(user.lastName);
      }
      console.log(this.users);
    });

    // tous les types de projects
    this.getTypeProjects().subscribe(data => {
      this.typeProjects = data;
      console.log(data);
    });

    // // tous les projects
    // this.getProjects().subscribe(data => {
    //   this.projectsAll = data;
    //   console.log(data);
    // });

    // this.getProjectsByUser(this.selected).subscribe(data => {
    //   console.log(data);
    //   // this.selectedProject = data;
    // for (const p of this.projects) {
    //   console.log(p.amount);
    // }
    // });


  }

  public getProjects(): Observable<Project[]> {
    return this.userService.getProjects();
  }
  public getUsers(): Observable<User[]> {
    return this.userService.getUsers();
  }
  public getTypeProjects(): Observable<TypeProject[]> {
    return this.userService.getTypeProjects();
  }


  go(): void {
    //      this.getProjectsByUser(this.selected);
    // console.log('======>  salut le userid selectionne ==========>' + this.selected.id);
    // this.userService.getProjectsByUserId(this.selected.id);

    this.userService.getProjectsByUserId(this.selected).subscribe(data => {
      console.log(data);
      this.projects = data;
    });

  }

  modify(): void {

    this.userService.putProject(this.selectedProject).subscribe(data => {
      console.log('update le projet ' + this.selectedProject.name);
      this.selectedProject = data;

    });

  }
  deleteUser(){

    this.userService.deleteUserById(this.selected).subscribe(data => {
      console.log('delete  le client ' + this.selected);

    });


  }

  details(): void {
    //this.project = this.selectedProject;

    console.log(this.selectedProject);

  }

  public getProjectsByUser(userSelected: User): Observable<Project[]> {
    return this.userService.getProjectsByUserId(userSelected.id);

  }

}
