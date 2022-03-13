import { Component, OnInit } from '@angular/core';
import { ReviewFormDialogComponent } from '../review-form-dialog/review-form-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {


  constructor(public dialog: MatDialog) { }

  openDialog() {
     const dialogRef = this.dialog.open(ReviewFormDialogComponent);
     width: '250px'
  }



  ngOnInit(): void {
  }
}
