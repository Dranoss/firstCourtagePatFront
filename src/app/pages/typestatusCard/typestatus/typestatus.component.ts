import { Component, OnInit, Inject } from '@angular/core';
import { Projectstatus } from 'src/app/shared/core/classes/projectstatus.';
import { TypeprojectcardComponent } from '../../typeProjectCard/typeprojectcard/typeprojectcard.component';
import { StatusService } from 'src/app/shared/services/statusservice/status.service';
import { TypeProject } from 'src/app/shared/core/classes/typeProject';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from 'src/app/shared/core/classes/project';
import { ProjectService } from 'src/app/shared/services/project/project.service';
import { TypeprojectService } from 'src/app/shared/services/typeproject/typeproject.service';
import { User } from 'src/app/shared/core/classes/user';

@Component({
  selector: 'apa-status',
  templateUrl: './typestatus.component.html',
  styleUrls: ['./typestatus.component.scss']
})
export class TypestatusComponent implements OnInit {

  statusses: Projectstatus[];
  inputNameStatus: string;
  inputRanking: number;
  status: Projectstatus;
  user: User;
  type: TypeProject;
  statusSelected: Projectstatus;


  constructor( private typeProjectService: TypeprojectService,
               private statusService : StatusService,
              public dialogRef: MatDialogRef<TypeprojectcardComponent>,
              @Inject(MAT_DIALOG_DATA) public data:[ any,any]) { }

  ngOnInit(): void {
    this.type = this.data[1];
    this.user = this.data[0];
    this.statusses = this.type.projectStatuses;
  }

  compareObjects(o1: any, o2: any) {
    if (o1?.id == o2?.id) {
      return true;
    }
    else { return false; }
  }



  onModify() {


    this.status = new Projectstatus( this.inputNameStatus,Number(this.inputRanking),null,this.statusSelected.id);
    this.status.projectType = { "id": this.type.id} as TypeProject;
    this.statusService.postStatus(this.status).subscribe(data => {
      //arr.splice(index,1,item);
         this.type.projectStatuses.
              splice(this.type.projectStatuses.
                    indexOf(this.statusSelected), 1, data);
         this.dialogRef.close('Close');

        });

 }
  onValidate() {

    this.status = new Projectstatus( this.inputNameStatus,Number(this.inputRanking),null);
    this.status.projectType = { "id": this.type.id} as TypeProject;
    this.statusService.postStatus(this.status).subscribe(data => {

         this.type.projectStatuses.push(data);
         this.dialogRef.close('Close');
    });

  }
  onDelete() {
    this.statusService.deletestatus(this.statusSelected.id).subscribe(data => {
      this.type.projectStatuses.splice(this.type.projectStatuses.indexOf(this.statusSelected,1));
      this.dialogRef.close('Close');
 });

}
}
