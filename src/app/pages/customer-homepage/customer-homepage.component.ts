import { Component, OnInit, SystemJsNgModuleLoader, Output } from '@angular/core';
import { ProjectService } from 'src/app/shared/services/project/project.service';
import { Project } from 'src/app/shared/core/classes/project';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/core/classes/user';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'apa-customer-homepage',
  templateUrl: './customer-homepage.component.html',
  styleUrls: ['./customer-homepage.component.scss']
})
export class CustomerHomepageComponent implements OnInit {

  userId : number;
  user : User;

  constructor(private userService : UserService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((params : ParamMap)=>{
      this.userId = parseInt(params.get('userID'));
      this.userService.getUserById(this.userId).subscribe((userFromServeur)=>{
        this.user = userFromServeur;

    });
  });

  }

}

