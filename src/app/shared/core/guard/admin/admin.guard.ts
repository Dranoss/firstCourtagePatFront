import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
    // TO DO: JE NE PEUX PAS LE FAIRE TANT QUE JE NE CONNAIS PAS LES ROUTES VERS LESQUELLES DIRIGER LES ADMINS ET LES CLIENTS... (Fabien)
  }

}
