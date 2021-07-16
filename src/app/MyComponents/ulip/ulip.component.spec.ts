import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UlipComponent } from './ulip.component';

describe('UlipComponent', () => {
  let component: UlipComponent;
  let fixture: ComponentFixture<UlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UlipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
