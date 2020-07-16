import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { User } from 'src/app/shared/core/classes/user';
import { ProjectDetailsService } from 'src/app/shared/services/project/project-details.service';
import { Project } from 'src/app/shared/core/classes/project';
import { ProjectService } from 'src/app/shared/services/project/project.service';
import { Documentt } from 'src/app/shared/core/classes/documentt';
import { FoldercardComponent } from '../foldercard/foldercard.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'apa-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  constructor(private projectService : ProjectService,
    private dialog: MatDialog, private activatedRouter: ActivatedRoute) { }

  project : Project;
  projectId : number;

  docs: Documentt[];

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((params : ParamMap)=>{
    this.projectId = parseInt(params.get('projectID'));
    this.projectService.getProjectById(this.projectId).subscribe((projectFromServeur)=>{
    this.project=projectFromServeur;
    this.docs = this.project?.documents;


    console.log(this.project);
  });
});


}
upload(){
  const dialogRef = this.dialog.open(FoldercardComponent, { data: null});

    dialogRef.afterClosed().subscribe(result => {
     });
}



}
