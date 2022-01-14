import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'connexion',
  template: `
    <div>
      <h1>Accéder au back office de l'application</h1>
      <section>
        <form [formGroup]="form" (ngSubmit)="onSubmit()">
          <mat-form-field appearance="fill">
            <mat-label>email : </mat-label>
            <input matInput formControlName="email" />
          </mat-form-field>
          <mat-form-field appearance="fill" class="ml-1">
            <mat-label>password : </mat-label>
            <input matInput formControlName="password" />
          </mat-form-field>
          <div class="text-center">
            <button mat-flat-button color="primary">Connexion</button>
          </div>
        </form>
      </section>
    </div>
  `,
  styles: [
    `
      section {
        display: flex;
        justify-content: center;
        margin-top: 40px;
      }
      .text-center {
        text-align: center;
      }
      .ml-1 {
        margin-left: 20px;
      }
    `,
  ],
})
export class ConnexionComponent implements OnInit {
  public form;
  public onSubmit() {
    const { email, password } = this.form.value;
    this.auth.login(email, password);
    this.form.reset();
  }

  constructor(fb: FormBuilder, private auth: AuthService) {
    this.form = fb.group({
      email: [],
      password: [],
    });
  }

  ngOnInit(): void {}
}
