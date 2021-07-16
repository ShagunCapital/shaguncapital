import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualhealthComponent } from './individualhealth.component';

describe('IndividualhealthComponent', () => {
  let component: IndividualhealthComponent;
  let fixture: ComponentFixture<IndividualhealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualhealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualhealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
