import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../shared/services/user/user.service';
import { User } from '../../shared/core/classes/user';

@Component({
  selector: 'apa-client-projects',
  templateUrl: './client-projects.component.html',
  styleUrls: ['./client-projects.component.scss']
})
export class ClientProjectsComponent implements OnInit {
  userId: number;
  userType: string;
  selectedUser: User;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = +paramMap.get('id');
      this.userType = paramMap.get('userType');
      this.initializeUser();
    });
  }
  navigatoToProjectCreation(){
    this.router.navigate(['/project-creation', this.userType, this.userId]);
  }
  initializeUser(){
    this.userService.getUserById(this.userId).subscribe(data => {
      this.selectedUser = data;
      console.log(this.selectedUser);
    });
  }
}
