import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecPageComponent } from './rec-page.component';

describe('RecPageComponent', () => {
  let component: RecPageComponent;
  let fixture: ComponentFixture<RecPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
