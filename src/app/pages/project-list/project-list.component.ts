import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/app/shared/services/project/project.service';
import { Project } from 'src/app/shared/core/classes/project';
import { User } from 'src/app/shared/core/classes/user';

@Component({
  selector: 'apa-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  selectedProject: Project;
  userId;
  projects:Project[];
  project: Project = new Project();
  selected: User;

  headers:  ['Nom','Date Ouverture','Date de clotûre ','Montant'];
  constructor(private activatedRouter: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit(): void {

  // Projects by userId
    this.activatedRouter.paramMap.subscribe(param => {
      this.userId = param.get('id');
      this.getProjects(this.userId);
    });
  }


  getProjects(id: number): void{
   this.projectService.getProjectsByUserId(id).subscribe(projects=>{
    this.projects = projects;
  });
  }
  modifyProjectDetails(): void {

    this.projectService.putProject(this.selectedProject).subscribe(data => {
      console.log('update le projet ' + this.selectedProject.name);
      this.selectedProject = data;

    });
    // this.getTheUserList();

  }  details(): void {
    //this.project = this.selectedProject;

    console.log(this.selectedProject);

  }


  newProject() {

    console.log(this.project.name);
    this.projectService.addProject(this.selected, this.project).subscribe(data => {
      console.log('add a project  ' + data);

    });

  //  this.getTheUserList();



  }

}
