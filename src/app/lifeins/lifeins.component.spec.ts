import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeinsComponent } from './lifeins.component';

describe('LifeinsComponent', () => {
  let component: LifeinsComponent;
  let fixture: ComponentFixture<LifeinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
