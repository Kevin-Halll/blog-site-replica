import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-review-form-dialog',
  templateUrl: './review-form-dialog.component.html',
  styleUrls: ['./review-form-dialog.component.scss']
})
export class ReviewFormDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ReviewFormDialogComponent>) { }

  ngOnInit(): void {
  }

}
