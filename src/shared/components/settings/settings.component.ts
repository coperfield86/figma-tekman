import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  form = this.fb.group({
    language: [],
    course: []
  });

  constructor(
    private fb: FormBuilder,
  ) { }
}
