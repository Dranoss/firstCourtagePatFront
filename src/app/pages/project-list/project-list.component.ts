import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/app/shared/services/project/project.service';
import { Project } from 'src/app/shared/core/classes/project';

@Component({
  selector: 'apa-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  userId;

  constructor(private activatedRouter: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit(): void {

  // Projects by userId
    this.activatedRouter.paramMap.subscribe(param => {
      this.userId = param.get('id');
      this.getProjects(this.userId);
    });
  }


  getProjects(id: number): Observable<Project[]> {
  return this.projectService.getProjectsByUserId(id);
  }

}
