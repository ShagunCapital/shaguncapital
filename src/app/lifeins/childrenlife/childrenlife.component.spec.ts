import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenlifeComponent } from './childrenlife.component';

describe('ChildrenlifeComponent', () => {
  let component: ChildrenlifeComponent;
  let fixture: ComponentFixture<ChildrenlifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrenlifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenlifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
