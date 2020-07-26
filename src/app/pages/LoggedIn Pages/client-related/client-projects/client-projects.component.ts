import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/core/classes/user';
import { ProjectType } from 'src/app/shared/core/classes/project-type';
import { UserService } from 'src/app/shared/services/user/user.service';
import { ProjectService } from 'src/app/shared/services/project/project.service';
import { ProjectTypeService } from 'src/app/shared/services/project-type/project-type.service';

@Component({
  selector: 'apa-client-projects',
  templateUrl: './client-projects.component.html',
  styleUrls: ['./client-projects.component.scss']
})
export class ClientProjectsComponent implements OnInit {
  userId: number;
  userType: string;
  userRole;
  selectedUser: User;
  projectTypes: ProjectType[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private projectService: ProjectService,
    private projectTypeService: ProjectTypeService,
  ) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.initialiszeUserRole();
      if (this.userRole === 'admin'){
        this.userId = +paramMap.get('userId');
      } else {
        this.userId = +localStorage.getItem('userId');
      }
      this.initializeUser(this.userId);
    });
  }
  navigatoToProjectCreation(){
    this.router.navigate(['/project-creation', this.userId]);
  }
  initializeUser(id: number){
    this.userService.getUserById(id).subscribe(data => {
      this.selectedUser = data;
      console.log(this.selectedUser.projects);

      this.selectedUser.projects = this.selectedUser.projects.sort((a, b) => {
        return +new Date(b.creationDate) - +new Date(a.creationDate);
      });
      console.log(this.selectedUser.projects);
      this.initializeUserType();
    });
  }
  initializeUserType(){
    this.projectTypeService.getAllProjectTypes().subscribe(data => {
      this.projectTypes = data;
      this.selectedUser.projects.forEach(project => {
        project.projectType = this.projectTypes.find(type => type.id === +project.projectType);
      });
    });
  }
  initialiszeUserRole(){
    return this.userRole = localStorage.getItem('userRole');
  }
  deleteProject(project){
    this.projectService.deleteProjectById(project.id).subscribe(() => {
      this.initializeUser(this.userId);
    });
  }
}
