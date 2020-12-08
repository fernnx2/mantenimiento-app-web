import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemsComponent } from './pems.component';

describe('PemsComponent', () => {
  let component: PemsComponent;
  let fixture: ComponentFixture<PemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
