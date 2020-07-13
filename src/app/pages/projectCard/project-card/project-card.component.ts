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

@Component({
  selector: 'apa-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  project: Project;
  projects: Project[];
  projectsAll: Project[];
  selectedProject: Project;
  selectedAll: Project[];

  selectedType: TypeProject;
  typeProjects: TypeProject[];

  maxRanking: number;
  userSelected: User;
  selected: User;
  form: FormGroup;

  slideSelected:MatSlider;
  selectedRanking: string;
  statusName: string;
  typeStatusses: Projectstatus[];

    steps:  number;


  startDate: MatDatepickerInput<Date>;
  endDate: MatDatepickerInput<Date>;

  constructor(public dialogRef: MatDialogRef<ProjectCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private typeProjectService: TypeprojectService,
    private projectService: ProjectService,
    private userService: UserService,
    private statusService: StatusService,

  ) { }

  ngOnInit(): void {

    //   this.pickerOpened = new Date();
    //  this.pickerInputClosed = new Date();

    // initialize liste of types projects
    this.getTypeOfProjects();
    // initialize liste of statusses
    //this.getStatusList();

    //open the dialog as null to create a project
    if (!isNaN(this.data)) {
      this.userService.getUserById(this.data).subscribe(us => {
        this.userSelected = us;

      });
      this.form = new FormGroup({

        name: new FormControl('', Validators.required),
        amount: new FormControl('', Validators.required),
        dateOpened: new FormControl('', Validators.email),
        dateClosed: new FormControl('', [Validators.required, Validators.minLength(10)]),
        projectTypeForm: new FormControl(null, Validators.required),
        projectStatusForm: new FormControl(null, Validators.required)

      });


    }
    //open the dialog as data known to update a user
    else {
      this.project = this.data;

      this.form = new FormGroup({

        name: new FormControl(this.project.name, Validators.required),
        amount: new FormControl('', Validators.required),
        dateOpened: new FormControl('', Validators.email),
        dateClosed: new FormControl('', [Validators.required, Validators.minLength(10)]),
        projectTypeForm: new FormControl(null, Validators.required),
        projectStatusForm: new FormControl(null, Validators.required)

      });
    }




  }

  // Initialize The type Of Projects List
  public getTypeOfProjects() {


    // this.typeProjects = [
    //   {
    //     'id': 1,
    //     'name': 'type 1',
    //     'projectStatus':
    //       [{ 'id': 1, 'name': 'En demarrage', 'ranking': 25 },
    //         { 'id': 2, 'name': 'En cours', 'ranking': 50 },
    //         { 'id': 3, 'name': 'En validation', 'ranking': 75 }
    //       ]
    //   },
    //   {
    //     'id': 2,
    //     'name': 'type 2',
    //     'projectStatus':
    //       [{ 'id': 1, 'name': 'En demarrage', 'ranking': 25 },
    //         { 'id': 2, 'name': 'En cours', 'ranking': 50 },
    //         { 'id': 3, 'name': 'En validation', 'ranking': 75 }
    //       ]
    //   }

    // ];


    this.typeProjectService.getTypeOfProject().subscribe(data => {
      this.typeProjects = data;
      this.selectedType = this.form.get('projectStatusform')?.value;
      this.typeStatusses = this.selectedType?.projectStatus;
    });



  }



  // Initialize The statusses Of status List
  public getStatusList(typeSelected: TypeProject) {

    // this.typeStatusses =
    // [ { 'id': 1, 'name': 'En demarrage', 'ranking': 25 },
    //   { 'id': 2, 'name': 'En cours', 'ranking': 50 },
    //   { 'id': 3, 'name': 'En validation', 'ranking': 75 }
    // ];



   this.statusService.getListofStatus(typeSelected.id).subscribe(data => {
    this.typeStatusses = data;
    this.steps= this.typeStatusses.length +1;

// gerer le ranking
     });
  }

  slide(){



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
    this.form.get('projectStatusForm')?.value,
    null//user
    //,id
  );

  this.project.projectStatus = new Projectstatus('', this.project.projectStatus.ranking, this.project.projectStatus.id)
  // poster le nouveau projet sur le userSelected id .

  this.projectService.addProject(this.project).subscribe(data => {
    this.dialogRef.close('Close');
  });

  // this.userService.putUserById(this.userSelected).subscribe(data => {
  //   this.dialogRef.close('close');
  // });



}

// statements which put a User
modifyProjectDetails(): void {

  // this.user = new User(
  //   this.user.role,
  //   this.form.get('userTypeForm')?.value,
  //   this.form.get('lastName')?.value,
  //   this.form.get('firstName')?.value,
  //   this.form.get('email')?.value,
  //   this.form.get('phoneNumber')?.value,
  //   this.form.get('password')?.value,
  //   this.form.get('companyName')?.value,
  //   this.form.get('siretNumber')?.value,
  //   this.form.get('sponsorshipCode')?.value,
  //   this.form.get('address')?.value,
  //   this.form.get('rib')?.value,
  //   this.user.id = this.data.id);


  //   this.user.userType = new UserType(this.user.id, '');

  //   this.userCardService.putUserById(this.user).subscribe(data => {
  //   this.dialogRef.close('Close');


  // });


}

}


