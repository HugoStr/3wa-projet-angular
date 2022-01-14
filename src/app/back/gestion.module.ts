import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { FormComponent } from './form.component';
import { GestionComponent } from './gestion.component';

@NgModule({
  declarations: [FormComponent, GestionComponent],
  imports: [
    CommonModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
})
export class GestionModule {}
