import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroMfComponent } from './intro-mf.component';

describe('IntroMfComponent', () => {
  let component: IntroMfComponent;
  let fixture: ComponentFixture<IntroMfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroMfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroMfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
