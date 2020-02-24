import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdGuard implements CanActivate {
constructor(private router: Router) {}

  canActivate() {
    const user = sessionStorage.getItem('user');
    if(user) {
      return true;
    }
    else {
      this.router.navigateByUrl('/login')
    }
  }
}
