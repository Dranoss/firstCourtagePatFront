import { Component, OnInit } from '@angular/core';
import { Project } from '../../shared/core/classes/project';
import { ProjectTypeService } from '../../shared/services/projectType/project-type.service';
import { ProjectType } from '../../shared/core/classes/project-type';
import { UserService } from '../../shared/services/user/user.service';
import { User } from '../../shared/core/classes/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'apa-project-creation',
  templateUrl: './project-creation.component.html',
  styleUrls: ['./project-creation.component.scss']
})
export class ProjectCreationComponent implements OnInit {
  // CREATE FORM MODEL
  projectModel: Project;

  // INITIALIZE OBJECT TO GET DATA FROM BACKEND
  projectTypes: ProjectType[] = [];
  selectedUser: User;

  // COLLECT THE URL PARAMETER
  selectedUserId: number;
  selectedUserType: string;


  selectedProjectType: ProjectType;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectTypeService: ProjectTypeService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.resetForm();
    this.route.paramMap.subscribe(paramMap => {
      this.selectedUserId = +paramMap.get('userId');
      this.selectedUserType = paramMap.get('userType');
      this.initializeProjectType();
      this.initializeUser(this.selectedUserId);
    });
  }

  resetForm(){
    return this.projectModel = {
      name: '',
      projectType: null,
      amount: 0,
      creationDate: new Date(),
      closingDate: null
    };
  }

  onSubmit(){
    this.selectedUser.projects.push(this.projectModel);
    this.userService.createUserProjectByUserId(this.selectedUser).subscribe(() => {
      console.log('Project creation succeeded');
      this.resetForm();
      this.router.navigate([`/client-projects/${this.selectedUserType}/${this.selectedUserId}`]);
    });
  }
  initializeProjectType(){
    this.projectTypeService.getAllUserTypes().subscribe(data => {
      this.projectTypes = data;

    });
  }
  initializeUser(id){
    this.userService.getUserById(id).subscribe(data => {
      this.selectedUser = data;
    });
  }

  selectProjectType(selectedType: ProjectType){
    this.projectModel.projectType = {
      id: selectedType.id,
      name: selectedType.name,
      documentTypes: selectedType.documentTypes,
      projectStatuses: selectedType.projectStatuses
    };
    this.selectedProjectType = selectedType;
  }
}
