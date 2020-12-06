import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/components/components.module';
import { InventarioRoutingModule } from './inventario-routing.module';
import { InventarioComponent } from './inventario.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  imports: [InventarioRoutingModule, ComponentsModule, NzModalModule, NzButtonModule, NzGridModule],
  declarations: [InventarioComponent],
  exports: [InventarioComponent],
  providers:[
  ]
})
export class InventarioModule { }
