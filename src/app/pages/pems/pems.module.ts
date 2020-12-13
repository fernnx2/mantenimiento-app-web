import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ComponentsModule } from 'src/app/components/components.module';
import { MantenimientoService } from 'src/app/services/mantenimientoService/matenimientoService.service';
import { PemsRouting } from './pems-routing.module';
import { PemsComponent } from './pems.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  imports: [
    CommonModule,
    PemsRouting,
    ComponentsModule,
    NzModalModule,
    NzGridModule,
    NzButtonModule,
    NzPageHeaderModule,
    NzTableModule,
    NzDrawerModule,
    NzDescriptionsModule,
    NzDividerModule

    ],
  exports: [PemsComponent],
  declarations: [PemsComponent],
  providers: [MantenimientoService],
})
export class PemsModule { }
