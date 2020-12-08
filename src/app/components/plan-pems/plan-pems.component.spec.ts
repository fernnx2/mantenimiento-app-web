import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanPemsComponent } from './plan-pems.component';

describe('PlanPemsComponent', () => {
  let component: PlanPemsComponent;
  let fixture: ComponentFixture<PlanPemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanPemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanPemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
