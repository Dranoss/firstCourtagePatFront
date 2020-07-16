import { Component, OnInit, Inject } from '@angular/core';
import { Project } from 'src/app/shared/core/classes/project';
import { TypeProject } from 'src/app/shared/core/classes/typeProject';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/app/shared/services/project/project.service';
import { User } from 'src/app/shared/core/classes/user';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TypeprojectcardComponent } from '../../typeProjectCard/typeprojectcard/typeprojectcard.component';

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
  selectedOneProject: Project;
  selectedType: TypeProject;
  typeProjects: TypeProject[];
  userClicked = false;
  selected: User;
  form;

  constructor(  public dialogRef: MatDialogRef<ProjectCardComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                private dialog: MatDialog,
                private projectService: ProjectService) { }

  ngOnInit(): void {
    // initialize liste of types projects
    this.getTypeOfProjects();

    //open the dialog as null to create a user
    if (this.data === null) {
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
    // else {
    //   this.user = this.data;

    //   this.form = new FormGroup({

    //     lastName: new FormControl(this.user.lastName),
    //     firstName: new FormControl(this.user.firstName),
    //     email: new FormControl(this.user.email),
    //     phoneNumber: new FormControl(this.user.phoneNumber),//, [Validators.required, Validators.minLength(10)]
    //     password: new FormControl(this.user.password),
    //     societyName: new FormControl(this.user.companyName),
    //     siretNumber: new FormControl(this.user.siretNumber),
    //     sponsorshipCode: new FormControl(this.user.sponsorshipCode),
    //     addressNumber: new FormControl(this.user.address?.addressNumber),
    //     street: new FormControl(this.user.address?.street),
    //     zipCode: new FormControl(this.user.address?.zipCode),
    //     city: new FormControl(this.user.address?.city),
    //     iban: new FormControl(this.user.rib?.iban),
    //     bic: new FormControl(this.user.rib?.bic),
    //     ownerFullname: new FormControl(this.user.rib?.ownerFullname),
    //     bankName: new FormControl(this.user.rib?.bankName),
    //     //    userTypeForm: new FormControl(this.user.userType?.name, Validators.required)
    //     userTypeForm: new FormControl({ id: this.user.userType }, Validators.required)

    //   });}




  }

    //Initialize The type Of Projects
    public getTypeOfProjects() {

  //     this.projectService.getTypeProjects().subscribe(data => {
  //       this.typeProjects = data;
  //       console.log(data);
  //     });
  //   }


  // // method which initialize the select list of type of projects
  // getTypeOfProject() {

  //   this.projectService.getTypeProjects()
  //     .subscribe(data => {
  //       this.typeProjects = data;
  //     });

  // }

  // // call a dialog to post a new type of user
  // addTypeOfproject() {


  //   let ref = this.dialog.open(TypeprojectcardComponent);
  //   ref.afterClosed().subscribe(result => {
  //     this.getTypeOfProject();
  //   });

  // }

  // // statements which post a new Project
  // onValidate() {

  //   this.project = new User(
  //     'client',
  //     this.form.get('userTypeForm')?.value,
  //     this.form.get('lastName')?.value,
  //     this.form.get('firstName')?.value,
  //     this.form.get('email')?.value,
  //     this.form.get('phoneNumber')?.value,
  //     this.form.get('password')?.value,
  //     this.form.get('companyName')?.value,
  //     this.form.get('siretNumber')?.value,
  //     this.form.get('sponsorshipCode')?.value,
  //     this.form.get('address')?.value,
  //     this.form.get('rib')?.value);


  //   //    this.user.type = this.form.get('userTypeForm')?.value as UserType;


  //   this.user.userType = new UserType(this.user.id, '');
  //   this.userCardService.postUser(this.user).subscribe(data => {
  //     this.dialogRef.close('Close');

  //   });


  }


  public getProjects(): Observable<Project[]> {

    return this.projectService.getAllProjects();
  }
  compareObjects(o1: any, o2: any) {
    if (o1?.id == o2?.id) {
      return true;
    }
    else { return false; }
  }

  // call a dialog to post a new type of user
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
      this.form.get('projectStatusForm')?.value);

// poster le nouveau projet sur l id passer en data .

      // this.user.userType = new UserType(this.user.id, '');
      // this.userCardService.postUser(this.user).subscribe(data => {
      // this.dialogRef.close('Close');});


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


