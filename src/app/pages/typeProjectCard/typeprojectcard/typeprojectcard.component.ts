import { Component, OnInit } from '@angular/core';
import { TypeProject } from 'src/app/shared/core/classes/typeProject';
import { ProjectCardComponent } from '../../projectCard/project-card/project-card.component';
import { MatDialogRef } from '@angular/material/dialog';
import { TypeprojectService } from 'src/app/shared/services/typeproject/typeproject.service';

@Component({
  selector: 'apa-typeprojectcard',
  templateUrl: './typeprojectcard.component.html',
  styleUrls: ['./typeprojectcard.component.scss']
})
export class TypeprojectcardComponent implements OnInit {

  typeProjects: TypeProject[];
  inputNewTypeProject;
  projectType: TypeProject;
  typeSelected: TypeProject;

  constructor( private typeProjectService: TypeprojectService,
              public dialogRef: MatDialogRef<ProjectCardComponent>) { }

  ngOnInit(): void {
    this.getTypeOfProjects();
  }

  compareObjects(o1: any, o2: any) {
    if (o1?.id == o2?.id) {
      return true;
    }
    else { return false; }
  }

  // Initialize The type Of Projects List
  public getTypeOfProjects() {

    this.typeProjectService.getTypeOfProject().subscribe(data => {
      this.typeProjects = data;
      // this.selectedType = this.form.get('projectStatusform')?.value;
      // this.typeStatusses = this.selectedType?.projectStatus;
    });


  }

  onModify() {

//    this.projectType.name = this.inputNewTypeProject;
    this.projectType = new TypeProject( this.inputNewTypeProject,null,this.typeSelected.id);
    this.typeProjectService.putProjectType(this.projectType).subscribe(data => {
      this.getTypeOfProjects();});
      this.dialogRef.close('Close');

 }
  onValidate() {

    this.projectType = new TypeProject( this.inputNewTypeProject,null,null);
    this.typeProjectService.postProjectType(this.projectType).subscribe(data => {
      this.getTypeOfProjects();
      this.dialogRef.close('Close');
    });


  }
  onDelete() {
    this.typeProjectService.deleteProjectType(this.typeSelected.id).subscribe(data => {
      this.getTypeOfProjects();
      this.dialogRef.close('Close');

    });

   }

}

