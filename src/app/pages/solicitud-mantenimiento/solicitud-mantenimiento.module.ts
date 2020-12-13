import { NgModule } from '@angular/core';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ComponentsModule } from 'src/app/components/components.module';
import { CommonModule } from '@angular/common';
import { SolicitudMantenimientoComponent } from './solicitud-mantenimiento.component';
import { SolicitudMantenimientoRoutingModule } from './solicitud-mantenimiento-routing.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { EstadoPipe } from 'src/app/share/pipes/estado.pipe';
import { PrioridadPipe } from 'src/app/share/pipes/prioridad.pipe';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
@NgModule({
  imports: [
      CommonModule,
      SolicitudMantenimientoRoutingModule,
      ComponentsModule,
      NzCalendarModule,
      NzModalModule,
      NzBadgeModule,
      NzGridModule,
      NzButtonModule,
      NzTableModule,
      NzPageHeaderModule,
      NzDrawerModule,
      NzDescriptionsModule,
      NzDividerModule
    ],
  exports:[SolicitudMantenimientoComponent],
  declarations:[SolicitudMantenimientoComponent, EstadoPipe, PrioridadPipe],
  providers:[]
})
export class SolicitudMantenimientoModule {}
