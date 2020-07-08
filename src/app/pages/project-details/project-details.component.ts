import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { User } from 'src/app/shared/core/classes/user';
import { ProjectDetailsService } from 'src/app/shared/services/project/project-details.service';
import { Project } from 'src/app/shared/core/classes/project';
import { ProjectService } from 'src/app/shared/services/project/project.service';

@Component({
  selector: 'apa-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  constructor(private projectService : ProjectService, private activatedRouter: ActivatedRoute) { }

  project : Project;
  projectId : number;


  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((params : ParamMap)=>{
    this.projectId = parseInt(params.get('projectID'));
    this.projectService.getProjectById(this.projectId).subscribe((projectFromServeur)=>{
    this.project=projectFromServeur;
    console.log(this.project);
  });
});

}

}
