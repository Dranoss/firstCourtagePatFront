import { Component, OnInit, Inject } from '@angular/core';
import { Project } from 'src/app/shared/core/classes/project';
import { TypeProject } from 'src/app/shared/core/classes/typeProject';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/app/shared/services/project/project.service';
import { User } from 'src/app/shared/core/classes/user';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
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
import { MatSelectChange } from '@angular/material/select';
import { TypestatusComponent } from '../../typestatus/typestatus/typestatus.component';

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

  form = new FormGroup({});
  listStatusForm = new FormControl();
  isCreated = false;

  slideSelected: MatSlider;
  selectedRanking: number;
  statusName: string;
  typeStatusses: Projectstatus[];
  selectedStatus: Projectstatus;

  steps: number;
  dateOpened = new Date();
  dateClosed = new Date();

  options: Options = {
    floor: 0,
    ceil: 100,
    step: 10,

    showSelectionBar: true,
     getSelectionBarColor: (value: number): string => {
    //   if (value <= 30) {
    //     return 'red';
    //   }
    //   if (value <= 60) {
    //   return 'orange';
    //   }
    //   if (value <= 90) {
    //     return 'yellow';
    //   }
    //   return '#2AE02A';
    //
     return 'black'; },

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
    this.getTypeOfProjects().subscribe(data => {
      this.typeProjects = data;
      this.userService.getUserById(this.data[1]).subscribe(us => {
        this.userSelected = us;
      });

      // open the dialog as null to create a project
      if (this.data[0] === null) {
        this.isCreated = false;

        this.form = new FormGroup({
          name: new FormControl('', Validators.required),
          amount: new FormControl('', Validators.required),
          dateOpened: new FormControl(this.dateOpened),
          dateClosed: new FormControl(this.dateClosed),
          projectTypeForm: new FormControl(this.typeProjects[0]),
          listStatusForm: new FormControl(this.project?.projectStatus)
        });
      }

      // open the dialog as data known to update a user
      else {
        this.isCreated = true;
        this.project = this.data[0];


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
          listStatusForm: new FormControl({id: this.project?.projectStatus})

        });
      }

    });

  }

  getTherankName(value: number): string {
    let n = '';
    if(!this.typeStatusses){
      this.typeStatusses = this.typeProjects.find(tP => tP.id === this.project.projectType.id).projectStatuses;
    }
    this.typeStatusses.filter(item => {
      if (item.ranking === value)
           n = item.name;
    });
    return n;
  }
  // Initialize The type Of Projects List
  public getTypeOfProjects() {
      return this.typeProjectService.getTypeOfProject();
  }

  // Initialize The statusses Of status List
  public getStatusList(selectChange: MatSelectChange ) {


    this.selectedType = selectChange.value;
    this.typeStatusses = this.selectedType.projectStatuses;
    this.options.step = this.typeStatusses.length + 1;
    this.listStatusForm.setValue(this.typeStatusses);

    // gerer le max ranking
    const n = this.typeStatusses.map(item => {
      return item.ranking;
    });
    this.maxRanking = n.sort()[n.length - 1];
    this.steps = n.length + 1;
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
      this.getTypeOfProjects().subscribe(data => {
        this.typeProjects = data;
        });

    });

  }

  // call a dialog to post a new statuss for a typeOfProject
  addStatusses(){

    let ref = this.dialog.open(TypestatusComponent, {data:[this.userSelected,this.form.get('projectTypeForm').value]});
    ref.afterClosed().subscribe(result => {
      this.typeStatusses = this.selectedType.projectStatuses;

      this.listStatusForm.setValue(this.typeStatusses);
    });

  }
  // statements which post a new Project
  onValidate() {

    this.project = new Project(
      this.form?.get('name').value,
      this.form?.get('amount').value,
      this.form.get('dateOpened').value,
      this.form.get('dateClosed').value,
      {id: this.form.get('projectTypeForm').value.id} as TypeProject,
      null,//document[]
      {id: this.form.get('listStatusForm').value.id} as Projectstatus,
      { "id": this.userSelected.id } as User
    );

    this.projectService.addProject(this.project).subscribe(data => {
      this.dialogRef.close('Close');
    });
  }

  // statements which put a User
  modifyProjectDetails(): void {


    this.userSelected = { id: this.userSelected.id } as User;
    this.project = new Project(
      this.form?.get('name')?.value,
      this.form?.get('amount')?.value,
      this.form?.get('dateOpened')?.value,
      this.form.get('dateClosed')?.value,
      this.form.get('projectTypeForm')?.value,
      null,
      this.form.get('listStatusForm')?.value,
      this.userSelected,
      this.data[0].id
    );

    this.project.user = { "id": this.userSelected.id } as User;
    this.project.projectType = { "id": this.project.projectType.id } as TypeProject;
   // this.project.projectStatus = { "id": this.selectedStatus.id } as Projectstatus;

    this.projectService.putProject(this.project).subscribe(data => {
      // this.dialogRef.close('Close');
    });

  }

  docs() {
    // navigate to doc pages
    this.router.navigate(['/projects', this.userSelected?.id]);
    this.dialogRef.close('Close');
  }

  out(){
    this.dialogRef.close('Close');
  }
  slide() {

//     this.options.step = this.selectedRanking;
this.selectedRanking= this.options.tickValueStep ;
    // // get dans typeStatusses le name correspondant.
    // const tempo = this.typeStatusses.map(element => {
    //   return [{ "name": element.name, "ranking": element.ranking }];

    // });

  }
  setSlide(status: Projectstatus) {

    this.selectedStatus = status;
    //     this.project.projectStatus = status;
    //  //   this.options.tickValueStep = status.ranking;
    //     // get dans typeStatusses le name correspondant.
    //     const tempo = this.typeStatusses.map(element => {
    //       return [{ "name": element.name, "ranking": element.ranking }];

    //     });
  }
}


