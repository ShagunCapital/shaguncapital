import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrouphealthComponent } from './grouphealth.component';

describe('GrouphealthComponent', () => {
  let component: GrouphealthComponent;
  let fixture: ComponentFixture<GrouphealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrouphealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrouphealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
