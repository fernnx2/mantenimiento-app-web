import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudMantenimientoComponent } from './solicitud-mantenimiento.component';

describe('SolicitudMantenimientoComponent', () => {
  let component: SolicitudMantenimientoComponent;
  let fixture: ComponentFixture<SolicitudMantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudMantenimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
