import { Component, OnInit } from '@angular/core';
import { ProjectType } from 'src/app/shared/core/classes/project-type';
import { ProjectTypeService } from 'src/app/shared/services/project-type/project-type.service';


@Component({
  selector: 'apa-project-type-list',
  templateUrl: './project-type-list.component.html',
  styleUrls: ['./project-type-list.component.scss']
})
export class ProjectTypeListComponent implements OnInit {
  projectTypes: ProjectType[] = [];
  constructor(
    private projectTypeService: ProjectTypeService,
  ) { }

  ngOnInit(): void {
    this.initializeProjectType();
  }
  initializeProjectType(){
    this.projectTypeService.getAllProjectTypes().subscribe(data => {
      this.projectTypes = data;
      this.projectTypes.forEach(projectType => {
        projectType.projectStatuses.sort((a, b) => {
          return a.ranking - b.ranking;
        });
      });
      console.log(this.projectTypes);
    });
  }
  deleteProjectType(projectType){
    this.projectTypeService.deleteProjectTypeById(projectType.id).subscribe(() => {
      this.initializeProjectType();
    });
  }
}
