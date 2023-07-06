import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardLinkComponent } from './board-link.component';

describe('BoardLinkComponent', () => {
  let component: BoardLinkComponent;
  let fixture: ComponentFixture<BoardLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardLinkComponent]
    });
    fixture = TestBed.createComponent(BoardLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
