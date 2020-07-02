import { Component, OnInit } from '@angular/core';
import { UserCardService } from 'src/app/shared/services/user-card/user-card.service';

@Component({
  selector: 'apa-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  userCardService : UserCardService;
  constructor() { }

  ngOnInit(): void {

  }


  modifyUserDetails(): void {

    // this.userService.putUser().subscribe(data => {
    //   console.log('update le projet ' + this.selectedProject.name);
    //   this.selectedProject = data;

    // });
    // // this.getTheUserList();

  }
}
