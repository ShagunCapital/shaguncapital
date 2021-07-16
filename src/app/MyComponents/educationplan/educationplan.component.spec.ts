import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationplanComponent } from './educationplan.component';

describe('EducationplanComponent', () => {
  let component: EducationplanComponent;
  let fixture: ComponentFixture<EducationplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
