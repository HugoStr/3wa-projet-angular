import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public logged$ = new Subject<boolean>();

  constructor(private auth: AngularFireAuth, private router: Router) {}

  public login(email: string, password: string) {
    this.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.logged$.next(true);
        localStorage.setItem('isLogged', email);
        console.log('Vous êtes bien connectés');
        this.router.navigate(['/admin']);
      })
      .catch((ex) => console.log(ex.message));
  }

  public logout() {
    this.logged$.next(false);
    localStorage.removeItem('isLogged');
    this.router.navigate(['/connexion']);
  }
}
