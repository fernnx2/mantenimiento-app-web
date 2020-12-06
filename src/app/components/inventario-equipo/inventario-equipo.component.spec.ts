import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioEquipoComponent } from './inventario-equipo.component';

describe('InventarioEquipoComponent', () => {
  let component: InventarioEquipoComponent;
  let fixture: ComponentFixture<InventarioEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventarioEquipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
