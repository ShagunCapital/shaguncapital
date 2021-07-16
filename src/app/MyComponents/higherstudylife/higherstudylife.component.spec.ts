import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HigherstudylifeComponent } from './higherstudylife.component';

describe('HigherstudylifeComponent', () => {
  let component: HigherstudylifeComponent;
  let fixture: ComponentFixture<HigherstudylifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HigherstudylifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HigherstudylifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
