import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user/user.service';
import { User } from 'src/app/shared/core/classes/user';
import { Project } from 'src/app/shared/core/classes/project';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'apa-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users = [];
  projects = [];

  constructor(private userService: UserService, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {

    const us = this.userService.getUsers().subscribe(data => {
      this.users.push(data);
    });

  }

  onSelectedUser(): void {
    //    get the projects of the user

    //   const proj = this.projectService.getProjects.subscribe(data=>{
    //     this.projects.push(data);
    //   });
    // }

  }
}
