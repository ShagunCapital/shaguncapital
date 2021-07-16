import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BluechipComponent } from './bluechip.component';

describe('BluechipComponent', () => {
  let component: BluechipComponent;
  let fixture: ComponentFixture<BluechipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BluechipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BluechipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
