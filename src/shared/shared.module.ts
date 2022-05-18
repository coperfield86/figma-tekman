import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import {AngularMaterialModule} from "../angular-material/angular-material.module";
import {FlexModule} from "@angular/flex-layout";
import { GoBackComponent } from './components/go-back/go-back.component';
import {RouterModule} from "@angular/router";
import { SettingsComponent } from './components/settings/settings.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    NavbarComponent,
    GoBackComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FlexModule,
    RouterModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  exports: [
    NavbarComponent,
    AngularMaterialModule,
    GoBackComponent
  ]
})
export class SharedModule { }
