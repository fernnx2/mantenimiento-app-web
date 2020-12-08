import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPemsComponent } from './tipo-pems.component';

describe('TipoPemsComponent', () => {
  let component: TipoPemsComponent;
  let fixture: ComponentFixture<TipoPemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoPemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoPemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
