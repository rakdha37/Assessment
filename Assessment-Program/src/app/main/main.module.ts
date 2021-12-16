import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MemberportalComponent } from './memberportal/memberportal.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    MemberportalComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class MainModule { }
