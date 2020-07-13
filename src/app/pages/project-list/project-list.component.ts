import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/app/shared/services/project/project.service';
import { Project } from 'src/app/shared/core/classes/project';
import { User } from 'src/app/shared/core/classes/user';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatSortModule } from "@angular/material/sort";
import { MatPaginator } from '@angular/material/paginator';
import { UserService } from 'src/app/shared/services/user/user.service';
import { ProjectCardComponent } from '../projectCard/project-card/project-card.component';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetailsComponent } from '../project-details/project-details.component';

@Component({
  selector: 'apa-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  selectedProject: Project;
  userId: number;
  userName: string;
  projects: MatTableDataSource<Project>;
  selected: User;
  dateClosed: Date;
  dateOpened: Date;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  headers: string[];

  constructor(private activatedRouter: ActivatedRoute,
    private projectService: ProjectService,
    private userService: UserService,

    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.headers =
      ['name', 'Type', 'Montant', 'Date Ouverture', 'Date cloture', 'actions'];

    // Projects by userId
    this.activatedRouter.paramMap.subscribe(param => {
      this.userId = +param.get('id');
      this.userName = param.get('userName');
      this.getProjects(this.userId);
    });

  }


  getProjects(id: number) {
    this.userService.getUserById(id).subscribe(data => {

      this.projects = new MatTableDataSource(data.projects);
      this.projects.sort = this.sort;
      this.projects.paginator = this.paginator;
    });
  }

  newProject() {

    const dialogRef = this.dialog.open(ProjectCardComponent, { data: [null, this.userId] });

    dialogRef.afterClosed().subscribe(result => {
      this.getProjects(this.userId);
    });

  }

  modifyProject(selectedProject: Project): void {

    let dialogRef = this.dialog.open(ProjectCardComponent, { data: [selectedProject, this.userId] });

    dialogRef.afterClosed().subscribe(result => {
      this.getProjects(this.userId);
    });

  }

  deleteProject(selectedProject: Project) {

    this.projectService.delete(selectedProject.id).subscribe(data => {
      this.getProjects(this.userId);
    });

  }


}
