import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  userRole;
  constructor(
    private router: Router,
  ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.userRole = localStorage.getItem('userRole');
      if (this.userRole === 'admin'){
        return true;
      } else {
        this.router.navigateByUrl('/client-projects/' + localStorage.getItem('userId'));
      }
    }}
