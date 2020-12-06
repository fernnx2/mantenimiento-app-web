import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { AuthRoutingModule } from '../pages/auth/auth-routing.module';
import { EquipoService } from '../services/equipoService/equipo.service';
import { InventarioEquipoComponent } from './inventario-equipo/inventario-equipo.component';
import { InventarioTableComponent } from './inventario-table/inventario-table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FichaTecnicaComponent } from './ficha-tecnica/ficha-tecnica.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    NzLayoutModule,
    NzFormModule,
    NzButtonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzCheckboxModule,
    NzIconModule,
    NzSelectModule,
    NzMessageModule,
    NzPageHeaderModule,
    NzTableModule,
    NzModalModule,
    NzDatePickerModule
  ],
  declarations: [InventarioEquipoComponent, InventarioTableComponent, FichaTecnicaComponent],
  exports: [
      InventarioEquipoComponent, InventarioTableComponent, FichaTecnicaComponent
  ],
  providers:[
    EquipoService
  ]
})
export class ComponentsModule { }
