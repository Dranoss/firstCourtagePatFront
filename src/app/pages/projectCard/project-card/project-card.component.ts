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
import { Options, LabelType } from 'ng5-slider';
import { runInThisContext } from 'vm';

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

  selectedRanking: number;
  statusName: string;

  typeStatusses: Projectstatus[];
  selectedStatus: Projectstatus;

  steps: number;
  dateOpened = new Date();
  dateClosed: Date;


  options: Options = {
    floor: 0,
    ceil: 100,
    step: 10,

    showSelectionBar: true,
    getSelectionBarColor: (value: number): string => {
      if (value <= 30) {
        return 'red';
      }
      if (value <= 60) {
        return 'orange';
      }
      if (value <= 90) {
        return 'yellow';
      }
      return '#2AE02A';
    },

    showTicks: true,
    getLegend: (value: number): string => {
      return this.getTherankName(value);
    },
    // translate: (value: number, label: LabelType): string => {

    //   // check the value get the name coresponding
    //   return '%' + value;

    // }
  };


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
        projectStatusForm: new FormControl(this.project?.projectStatus)
      });

    }

    //open the dialog as data known to update a user
    else {
      this.isCreated = true;
      this.project = this.data[0];
      this.getStatusList(this.project.projectType);

      this.statusService.getStatusById(Number(this.project.projectStatus)).subscribe(
        data => {
          this.project.projectStatus = data;
          this.project.projectStatus.ranking = data.ranking;

        });

      this.form = new FormGroup({
        name: new FormControl(this.project?.name, Validators.required),
        amount: new FormControl(this.project?.amount),
        dateOpened: new FormControl(this.project?.creationDate),
        dateClosed: new FormControl(this.project?.closingDate),
        projectTypeForm: new FormControl(this.project?.projectType, Validators.required),
        projectStatusForm: new FormControl(this.project?.projectStatus)

      });
    }
  }
  getTherankName(value: number): string {
    let n = '';
    this.typeStatusses.filter(item => {
      if (item.ranking === value)
      n = item.name;
    });
    return n;
  }
  // Initialize The type Of Projects List
  public getTypeOfProjects() {

    this.typeProjectService.getTypeOfProject().subscribe(data => {
      this.typeProjects = data;
    });
  }

  // Initialize The statusses Of status List
  public getStatusList(typeSelected: TypeProject) {
    if (!this.isCreated)
     typeSelected = this.form.get('projectTypeForm').value;

      this.statusService.getListofStatus(typeSelected?.id).subscribe(data => {
      this.typeStatusses = data;
      this.options.step = data.length + 1;

      // gerer le max ranking
      const n = this.typeStatusses.map(item => {
        return item.ranking;
      });
      this.maxRanking = n.sort()[n.length - 1];
      this.steps = n.length + 1;
    });
  }

  compareObjects(o1: any, o2: any) {
    if (o1?.id == o2?.id) {
      this.getStatusList(this.project.projectType);
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


    this.project.user = { "id": this.userSelected.id } as User;
    this.project.projectType = { "id": this.project.projectType.id } as TypeProject;

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

    // this.project.projectStatus = { "id": 1 } as Projectstatus;
    this.project.user = { "id": this.userSelected.id } as User;
    this.project.projectType = { "id": this.project.projectType.id } as TypeProject;

    // this.typeProjectService.getTypeOfProjectById(this.form.get('projectTypeForm')?.value,).subscribe(data=>{
    //   this.project.projectType = data;
    //   this.dialogRef.close('Close');
    // });

    this.projectService.putProject(this.project).subscribe(data => {
      this.dialogRef.close('Close');
    });

  }

  docs() {
    // navigate to doc pages
    this.router.navigate(['/projects', this.userSelected?.id]);
    this.dialogRef.close('Close');
  }
  slide() {

    this.options.tickValueStep = this.selectedRanking;
    // get dans typeStatusses le name correspondant.
    const tempo = this.typeStatusses.map(element => {
      return [{ "name": element.name, "ranking": element.ranking }];

    });



  }
}


