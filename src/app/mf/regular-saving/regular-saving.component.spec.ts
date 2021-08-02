import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularSavingComponent } from './regular-saving.component';

describe('RegularSavingComponent', () => {
  let component: RegularSavingComponent;
  let fixture: ComponentFixture<RegularSavingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularSavingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularSavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
