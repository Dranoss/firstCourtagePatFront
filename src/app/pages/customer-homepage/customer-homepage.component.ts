import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/services/project/project.service';
import { Projects } from 'src/app/shared/core/classes/project';

@Component({
  selector: 'apa-customer-homepage',
  templateUrl: './customer-homepage.component.html',
  styleUrls: ['./customer-homepage.component.scss']
})
export class CustomerHomepageComponent implements OnInit {

  projects : Projects[] = [];

  constructor(private projectService : ProjectService) { }

  ngOnInit(): void {
    this.projectService.getAll().subscribe((projectsFromServeur)=>{
      this.projects = projectsFromServeur;
    });
  }

}
