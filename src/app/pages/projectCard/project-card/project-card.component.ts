import { Component, OnInit, Inject } from '@angular/core';
import { Project } from 'src/app/shared/core/classes/project';
import { TypeProject } from 'src/app/shared/core/classes/typeProject';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/app/shared/services/project/project.service';
import { User } from 'src/app/shared/core/classes/user';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TypeprojectcardComponent } from '../../typeProjectCard/typeprojectcard/typeprojectcard.component';
import { TypeprojectService } from 'src/app/shared/services/typeproject/typeproject.service';
import { UserService } from 'src/app/shared/services/user/user.service';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepicker, MatDatepickerInput } from '@angular/material/datepicker';
import { StatusService } from 'src/app/shared/services/statusservice/status.service';
import { Projectstatus } from 'src/app/shared/core/classes/projectstatus.';
import { element } from 'protractor';
import { MatSlider } from '@angular/material/slider';
import { Router } from '@angular/router';
import { UserType } from 'src/app/shared/core/classes/userType';

@Component({
  selector: 'apa-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  project: Project;
  projects: Project[];
  projectsAll: Project[];
  selectedAll: Project[];

  selectedType: TypeProject;
  typeProjects: TypeProject[];

  maxRanking: number;
  userSelected: User;

  form: FormGroup;
  isCreated = false;


  slideSelected: MatSlider;
  selectedRanking: string;
  statusName: string;
  typeStatusses: Projectstatus[];

  steps: number;
  dateOpened = new Date();
  dateClosed = new Date();


  constructor(public dialogRef: MatDialogRef<ProjectCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { proj: Project, userid: number },
    private dialog: MatDialog,
    private typeProjectService: TypeprojectService,
    private projectService: ProjectService,
    private userService: UserService,
    private statusService: StatusService,
    private router: Router


  ) { }

  ngOnInit(): void {

    // initialize liste of types projects
    this.getTypeOfProjects();
    // initialize liste of statusses
    //this.getStatusList();

    this.userService.getUserById(this.data[1]).subscribe(us => {
      this.userSelected = us;

    });


    //open the dialog as null to create a project
    if (this.data[0] === null) {
      this.isCreated = false;
      this.form = new FormGroup({
        name: new FormControl('', Validators.required),
        amount: new FormControl('', Validators.required),
        dateOpened: new FormControl(this.dateOpened),
        dateClosed: new FormControl(this.dateClosed),
        projectTypeForm: new FormControl(null),
        projectStatusForm: new FormControl(null)
      });

    }

    //open the dialog as data known to update a user
    else {
      this.isCreated = true;
      this.project = this.data[0];
      this.form = new FormGroup({

        name: new FormControl(this.project?.name),
        amount: new FormControl(this.project?.amount),
        dateOpened: new FormControl(this.project?.dateOpened),
        dateClosed: new FormControl(this.project?.dateClosed),
        projectTypeForm: new FormControl(this.project?.typeProject),
        projectStatusForm: new FormControl(this.project?.projectStatus)

      });
    }




  }

  // Initialize The type Of Projects List
  public getTypeOfProjects() {

    this.typeProjectService.getTypeOfProject().subscribe(data => {
      this.typeProjects = data;
      // this.selectedType = this.form.get('projectStatusform')?.value;
      // this.typeStatusses = this.selectedType?.projectStatus;
    });
  }

  // Initialize The statusses Of status List
  public getStatusList(typeSelected: TypeProject) {
    this.statusService.getListofStatus(typeSelected.id).subscribe(data => {
      this.typeStatusses = data;
      this.steps = this.typeStatusses.length + 1;

      // gerer le ranking
    });
  }

  slide() {
    // ranger le tableau type satusses de max a min
    // determiner dans quel intervalle se trouve le selectedstatus
    // typestatusses=[{"","","","",",",""}]
    this.typeStatusses.forEach(element => {
      if (element.ranking >= Number(this.slideSelected.value)) this.statusName = element.name;

    });
  }

  compareObjects(o1: any, o2: any) {
    if (o1?.id == o2?.id) {
      return true;
    }
    else {
      return false;
    }

  }

  // call a dialog to post a new type of Project
  addTypeOfProject() {
    let ref = this.dialog.open(TypeprojectcardComponent);
    ref.afterClosed().subscribe(result => {
      this.getTypeOfProjects();
    });

  }

  // statements which post a new Project
  onValidate() {

    this.project = new Project(
      this.form.get('name')?.value,
      this.form.get('amount')?.value,
      this.form.get('dateOpened')?.value,
      this.form.get('dateClosed')?.value,
      this.form.get('projectTypeForm')?.value,
      null,//document[]
      null,//this.form.get('projectStatusForm')?.value,
      null//user
      //,id
    );

    // this.project.projectStatus = new Projectstatus('', this.project.projectStatus.ranking, this.project.projectStatus.id)

    // poster le nouveau projet sur le userSelected

    this.userService.getUserById(this.data[1]).subscribe(data => {
      this.userSelected = data; this.userSelected = { id: this.data[1] } as User;

    });
    // Creer le userType
    this.userSelected.userType = new UserType('', this.userSelected.userType.id/*  */);
    this.project.user = this.userSelected;

    this.projectService.addProject(this.project).subscribe(data => {
      this.dialogRef.close('Close');
    });
  }

  // statements which put a User
  modifyProjectDetails(): void {

    this.userSelected = { id: this.userSelected.id } as User;
    this.project = new Project(
      this.form.get('name')?.value,
      this.form.get('amount')?.value,
      this.form.get('dateOpened')?.value,
      this.form.get('dateClosed')?.value,
      this.form.get('projectTypeForm')?.value,
      null,//document[]
      this.form.get('projectStatusForm')?.value,
      this.userSelected,
      this.data[0].id
    );

    this.project.projectStatus = { "id": 1 } as Projectstatus;
    this.project.user = { "id": this.userSelected.id } as User;
    this.project.typeProject = { "id": this.project.typeProject.id } as TypeProject;

    this.projectService.putProject(this.project).subscribe(data => {
      this.dialogRef.close('Close');
    });

  }

  docs() {
    // navigate to doc pages
    this.router.navigate(['/projects', this.userSelected?.id]);
    this.dialogRef.close('Close');
  }

}


