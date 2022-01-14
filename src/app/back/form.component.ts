import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FirebaseService } from '../service/firebase.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  template: `
    <h2>ajouter un nouveau client</h2>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <mat-form-field app appearance="outline">
        <mat-label>Prénom</mat-label>
        <input matInput formControlName="prenom" />
      </mat-form-field>
      <mat-form-field app appearance="outline">
        <mat-label>nom</mat-label>
        <input matInput formControlName="nom" />
      </mat-form-field>
      <button mat-flat-button color="primary">Ajouter</button>
    </form>
  `,
  styles: [
    `
      form {
        display: flex;
        align-items: baseline;
      }
      form > * + * {
        margin-left: 20px;
      }
    `,
  ],
})
export class FormComponent implements OnInit {
  public form;
  private key: undefined | string;
  public onSubmit() {
    if (this.key) {
      console.log(this.form.value);
      this.fire.update(this.key, this.form.value).then(() => {
        this.route.navigate(['/admin']);
      });
    } else {
      this.fire.add(this.form.value).then(() => {
        this.form.reset();
      });
    }
  }
  constructor(
    private fb: FormBuilder,
    private fire: FirebaseService,
    private url: ActivatedRoute,
    private route: Router
  ) {
    this.form = this.fb.group({
      prenom: [],
      nom: [],
    });
  }

  ngOnInit(): void {
    this.url.params.subscribe((params: any) => {
      // console.log(params.key)
      this.key = params.key;
      if (params.key) {
        this.fire.getOne(params.key).subscribe((reponse: any) => {
          const [nom, prenom] = reponse;
          this.form = this.fb.group({
            prenom: [prenom],
            nom: [nom],
          });
        });
      }
    });
  }
}
