import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'apa-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  displayDisconnectButton = false;
  userId: number;
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.userId = +localStorage.getItem('userId');
    setInterval(() => {
      this.testConnection();
    }, 1000);
  }
  testConnection(){
    this.userId = +localStorage.getItem('userId');
    if (this.userId == null || this.userId === 0){
      this.displayDisconnectButton = false;
    } else {
      this.displayDisconnectButton = true;
    }
    return this.displayDisconnectButton;
  }
  navigateDependingOnConnectionStatus(){
    const userRole = localStorage.getItem('userRole');
    if (userRole === 'admin'){
      this.router.navigateByUrl('/client-list');
    } else if (userRole != null || userRole !== ''){
      this.router.navigateByUrl('/client-projects/' + localStorage.getItem('userId'));
    } else {
      this.router.navigateByUrl('/login');
      this.displayDisconnectButton = false;
    }
  }
  deconnectToken(){
    this.authService.removeToken();
    this.displayDisconnectButton = false;
    this.router.navigateByUrl('/login');
  }
}
