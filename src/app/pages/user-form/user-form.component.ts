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
  project: Project = new Project();
  projects: Project[];
  projectsAll: Project[];
  selected: User;

  selectedProject: Project;
  selectedAll: Project[];
  selectedOneProject: Project;
  selectedType: TypeProject;
  typeProjects: TypeProject[];

  userClicked = false;

  constructor(private userService: UserService, private projectService: ProjectService) {

  }

  ngOnInit(): void {

    // Initialize users' list and types project's list
    // liste de tous les users
    this.getTheUserList();

    // liste de tous les types de projects
    this.getTypeOfProjects();


    // tous les projects
    this.getListAllProjects();

    // this.getProjectsByUser(this.selected).subscribe(data => {
    //   console.log(data);
    //   // this.selectedProject = data;
    // for (const p of this.projects) {
    //   console.log(p.amount);
    // }
    // });


  }

  public getTheUserList() {
    this.getUsers().subscribe(data => {
      this.users = data;
      for (const user of this.users) {
        console.log(user.lastName);
      }
      console.log(this.users);
    });

  }
  public getTypeOfProjects() {

    this.projectService.getTypeProjects().subscribe(data => {
      this.typeProjects = data;
      console.log(data);
    });

  }
  public getUsers(): Observable<User[]> {
    return this.userService.getUsers();
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

  public getListAllProjects(){
    this.getProjects().subscribe(data => {
      this.projectsAll = data;
      console.log(data);
    });
  }

  public getProjects(): Observable<Project[]> {

    return this.projectService.getProjects();
  }



  clickOnUser(): void {
    this.getProjectsByUser();


  }

  modifyProjectDetails(): void {

    this.projectService.putProject(this.selectedProject).subscribe(data => {
      console.log('update le projet ' + this.selectedProject.name);
      this.selectedProject = data;

    });
    this.getTheUserList();

  }
  deleteUser() {

    this.userService.deleteUserById(this.selected.id).subscribe(data => {
      console.log('delete  le client ' + this.selected);

    });


  }

  newProject() {

    console.log(this.project.name);
    this.projectService.addProject(this.selected, this.project).subscribe(data => {
      console.log('add a project  ' + data);

    });

    this.getTheUserList();



  }

  details(): void {
    //this.project = this.selectedProject;

    console.log(this.selectedProject);

  }


}
