import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SettingsComponent} from "../settings/settings.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    private dialog: MatDialog
  ) { }

  openSettings(): void {
    const dialogRef = this.dialog.open(SettingsComponent, {
      width: '744px',
      position: { right: '0'},
      maxHeight: '100vh',
      height: '100%',
      panelClass: ['animate__animated','animate__slideInLeft']
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
