import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewColumnDialogComponent } from './new-column-dialog.component';

describe('NewColumnDialogComponent', () => {
  let component: NewColumnDialogComponent;
  let fixture: ComponentFixture<NewColumnDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewColumnDialogComponent]
    });
    fixture = TestBed.createComponent(NewColumnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
