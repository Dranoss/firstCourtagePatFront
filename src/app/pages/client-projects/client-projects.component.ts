import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../shared/services/user/user.service';
import { User } from '../../shared/core/classes/user';
import { UserTypeService } from '../../shared/services/user-type/user-type.service';
import { ProjectType } from '../../shared/core/classes/project-type';
import { ProjectTypeService } from '../../shared/services/project-type/project-type.service';
import { ProjectService } from '../../shared/services/project/project.service';

@Component({
  selector: 'apa-client-projects',
  templateUrl: './client-projects.component.html',
  styleUrls: ['./client-projects.component.scss']
})
export class ClientProjectsComponent implements OnInit {
  userId: number;
  userType: string;
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
      this.userId = +paramMap.get('id');
      this.userType = paramMap.get('userType');
      this.initializeUser(this.userId);
    });
  }
  navigatoToProjectCreation(){
    this.router.navigate(['/project-creation', this.userId]);
  }
  initializeUser(id: number){
    this.userService.getUserById(id).subscribe(data => {
      this.selectedUser = data;
      console.log(this.selectedUser);
      this.initializeUserType();
    });
  }
  initializeUserType(){
    this.projectTypeService.getAllProjectTypes().subscribe(data => {
      this.projectTypes = data;
      this.selectedUser.projects.forEach(project => {
        project.projectType = this.projectTypes.find(type => type.id === +project.projectType);
        console.log(this.selectedUser);
      });
    });
  }
  deleteProject(project){
    this.projectService.deleteProjectById(project.id).subscribe(() => {
      this.initializeUser(this.userId);
    });
  }
}
