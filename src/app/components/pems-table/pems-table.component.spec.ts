import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemsTableComponent } from './pems-table.component';

describe('PemsTableComponent', () => {
  let component: PemsTableComponent;
  let fixture: ComponentFixture<PemsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PemsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PemsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
