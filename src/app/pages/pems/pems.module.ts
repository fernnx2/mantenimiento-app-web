import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/components/components.module';
import { PemsRouting } from './pems-routing.module';
import { PemsComponent } from './pems.component';


@NgModule({
  imports: [PemsRouting, ComponentsModule],
  exports: [PemsComponent],
  declarations: [PemsComponent],
  providers: [],
})
export class PemsModule { }
