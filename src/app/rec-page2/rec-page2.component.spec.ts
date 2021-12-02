import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecPage2Component } from './rec-page2.component';

describe('RecPage2Component', () => {
  let component: RecPage2Component;
  let fixture: ComponentFixture<RecPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecPage2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
