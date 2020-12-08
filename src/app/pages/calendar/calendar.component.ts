import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { PlanPemsComponent } from 'src/app/components/plan-pems/plan-pems.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(private modal: NzModalService,private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
  }

  listDataMap = {
    uno:[],
    dos:[],
    tres:[],
    cuatro:[],
    cinco:[],
    seis:[],
    siete:[],
    ocho: [],
    nueve:[],
    diez: [],
    once: [],
    doce:[],
    trece:[],
    catorce:[],
    quince: [],
    dieciseis:[],
    diecisiete:[],
    dieciocho:[],
    diecinueve: [],
    veinte:[],
    veintiuno:[],
    veintidos:[],
    veintitres:[],
    veinticuatro:[],
    veinticinco:[],
    veintiseis:[],
    veintisiete:[],
    veintiocho:[],
    veintinueve:[],
    treinta:[
      { type: 'warning', content: 'This is warning event.' },
      { type: 'success', content: 'This is usual event.' },
      { type: 'error', content: 'This is error event.' }
    ]

}

getMonthData(date: Date): number | null {
  if (date.getMonth() === 8) {
    return 1394;
  }
  return null;
}

createComponentModal(): void {
  const modal = this.modal.create({
    nzTitle: 'Calendarizar Plan de Mantenimiento',
    nzContent: PlanPemsComponent,
    nzViewContainerRef: this.viewContainerRef,
    nzWidth: 700,
    nzComponentParams: {
    },
    nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000)),
    nzFooter: [
    ]
  });
  const instance = modal.getContentComponent();
  modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
  // Return a result when closed
  modal.afterClose.subscribe(result => {

  });

  // delay until modal instance created
  setTimeout(() => {
  }, 2000);
}

}
