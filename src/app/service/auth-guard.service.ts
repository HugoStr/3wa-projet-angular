import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  public canActivate(route: ActivatedRouteSnapshot) {
    // this.auth.logged$.subscribe((reponse) => reponse);
    if (localStorage.getItem('isLogged')) {
      return true;
    }
    this.router.navigate(['/erreur-401']);
    return false;
  }
}
