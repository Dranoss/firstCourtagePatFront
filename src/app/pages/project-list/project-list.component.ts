import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/app/shared/services/project/project.service';
import { Project } from 'src/app/shared/core/classes/project';
import { User } from 'src/app/shared/core/classes/user';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'apa-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  selectedProject: Project;
  userId: number;
  projects: MatTableDataSource<Project>;
  selected: User;
  dateClosed: Date;
  dateOpened: Date;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  headers: string[];
  userName: string;

  constructor(private activatedRouter: ActivatedRoute,
    private projectService: ProjectService) { }

  ngOnInit(): void {
    this.headers = ['Nom', 'Type', 'Montant', 'Date Ouverture', 'Date cloture', 'Durée', 'actions'];

    // Projects by userId
    this.activatedRouter.paramMap.subscribe(param => {
      this.userId = +param.get('id');
      this.userName = param.get('userName');


    });

    this.getProjects(this.userId);
  }


  getProjects(id: number): void {
    this.projectService.getProjectsByUserId(id).subscribe(data => {
      this.projects = new MatTableDataSource(data);
      this.projects.sort = this.sort;
      this.projects.paginator = this.paginator;
    });
  }
  modifyProject(selectedProject: Project): void {

    this.projectService.putProject(this.selectedProject).subscribe(data => {
      console.log('update le projet ' + this.selectedProject.name);
      this.selectedProject = data;

    });
    // this.getTheUserList();

  }

  deleteProject(selectedProject: Project) {

  }



  newProject() {

//    this.dialog.open(ProjectCardComponent, { data: null });


// this.projectService.addProject(this.selected, this.project).subscribe(data => {
    //   console.log('add a project  ' + data);

    // });

    //  this.getTheUserList();



  }

}
