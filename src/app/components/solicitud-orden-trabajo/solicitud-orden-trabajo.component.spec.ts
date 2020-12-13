import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudOrdenTrabajoComponent } from './solicitud-orden-trabajo.component';

describe('SolicitudOrdenTrabajoComponent', () => {
  let component: SolicitudOrdenTrabajoComponent;
  let fixture: ComponentFixture<SolicitudOrdenTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudOrdenTrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudOrdenTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
