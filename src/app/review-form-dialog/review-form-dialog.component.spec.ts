import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewFormDialogComponent } from './review-form-dialog.component';

describe('ReviewFormDialogComponent', () => {
  let component: ReviewFormDialogComponent;
  let fixture: ComponentFixture<ReviewFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
