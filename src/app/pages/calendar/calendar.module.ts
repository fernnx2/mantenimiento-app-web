import { NgModule } from '@angular/core';
import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ComponentsModule } from 'src/app/components/components.module';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
      CommonModule,
      CalendarRoutingModule,
      ComponentsModule,
      NzCalendarModule,
      NzModalModule,
      NzBadgeModule,
      NzGridModule,
      NzButtonModule,
    ],
  exports:[CalendarComponent],
  declarations:[CalendarComponent],
  providers:[]
})
export class CalendarModule {}
