import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header-absolute',
  templateUrl: './header-absolute.component.html',
  styleUrls: ['./header-absolute.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderAbsoluteComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: []
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
