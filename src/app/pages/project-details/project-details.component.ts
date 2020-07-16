import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { User } from 'src/app/shared/core/classes/user';
import { ProjectDetailsService } from 'src/app/shared/services/project/project-details.service';
import { Project } from 'src/app/shared/core/classes/project';
import { ProjectService } from 'src/app/shared/services/project/project.service';
import { ProjectStatusService } from 'src/app/shared/services/projectStatus/project-status.service';
import { ProjectStatus } from 'src/app/shared/core/classes/projectStatus';

@Component({
  selector: 'apa-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  constructor(private projectService : ProjectService, private activatedRouter: ActivatedRoute, private projectStatusService : ProjectStatusService) { }

  project : Project;
  projectId : number | ProjectStatus;
  projectStatus : ProjectStatus;


  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((params : ParamMap)=>{
    this.projectId = parseInt(params.get('projectID'));
    this.projectService.getProjectById(this.projectId).subscribe((projectFromServeur)=>{
    this.project=projectFromServeur;
    this.projectStatusService.getProjectStatusById(this.project.projectStatus).subscribe((projectStatusFromServeur)=>{
      this.projectStatus=projectStatusFromServeur;
  })

  })

});


}

}
