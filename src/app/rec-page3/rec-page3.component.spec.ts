import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecPage3Component } from './rec-page3.component';

describe('RecPage3Component', () => {
  let component: RecPage3Component;
  let fixture: ComponentFixture<RecPage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecPage3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
