import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyfloaterComponent } from './familyfloater.component';

describe('FamilyfloaterComponent', () => {
  let component: FamilyfloaterComponent;
  let fixture: ComponentFixture<FamilyfloaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyfloaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyfloaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
