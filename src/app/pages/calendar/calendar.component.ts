import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { PlanPemsComponent } from 'src/app/components/plan-pems/plan-pems.component';
import { CalendarioAuxiliar } from 'src/app/models/CalendarioAuxiliar';
import { PlanPems } from 'src/app/models/PlanPems';
import { MantenimientoService } from 'src/app/services/mantenimientoService/matenimientoService.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  listPlansPems: PlanPems[];
  listCalendarioAuxiliar: CalendarioAuxiliar[];
  warnCalendar =  { type: 'warning', content: '' };
  successCalendar =  { type: 'success', content: '' };
  errorCalendar =  { type: 'error', content: '' };

  constructor(private manttoService: MantenimientoService,private modal: NzModalService,private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    this.getPlanPems();
  }

  getDayforDate(date){
    let day = new Date(date);
    return day.getDay();
  }

  listDataMap = {
    uno:[
      'Que'
    ],
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
    treinta:[]

}

convertNumber(num){

  switch(num)
  {
      case 1: return 'uno';
      case 2: return 'dos';
      case 3: return 'tres';
      case 4: return 'cuatro';
      case 5: return 'cinco';
      case 6: return 'seis';
      case 7: return 'siete';
      case 8: return 'ocho';
      case 9: return 'nueve';
      case 10: return 'diez';
      case 11: return 'once:';
      case 12: return'doce';
      case 13: return 'trece';
      case 14: return 'catorce';
      case 15: return 'quince:';
      case 16: return 'dieciseis'
      case 17: return 'diecisiete';
      case 18: return 'dieciocho';
      case 19: return 'diecinueve:';
      case 20: return 'veinte';
      case 11: return 'veintiuno';
      case 22: return 'veintidos';
      case 23: return 'veintitres';
      case 24: return 'veinticuatro';
      case 25: return 'veinticinco';
      case 26: return 'veintiseis';
      case 27: return 'veintisiete';
      case 28: return 'veintiocho';
      case 29: return 'veintinueve';
      case 30: return 'treinta';

  }
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


setCalendarForPlanPem(){
  this.listPlansPems.forEach(plan =>{
    let dia = this.getDayforDate(plan.fechaInicio);
    this.warnCalendar.content = `Mantenimiento: ${plan.codigoEquipo}  : No PEM: ${plan.numeroPem}`;
    this.listDataMap[this.convertNumber(dia)].push(this.warnCalendar);
  })
}

setCalendarFormAuxiliar(){
  this.listCalendarioAuxiliar.forEach(aux =>{
    let dia = this.getDayforDate(aux.fechaProgramacionTrabajo);
    this.warnCalendar.content = `Mantenimiento : No PEM: ${aux.codigoPem}`;
    this.listDataMap[this.convertNumber(dia)].push(this.warnCalendar);
  })
}

  getPlanPems(){
    this.manttoService.findAllPlanPems().subscribe((planes: PlanPems[])=>{
      this.listPlansPems = planes;
      this.setCalendarForPlanPem();
      this.manttoService.findAllCalendarioAuxiliar().subscribe((calendarioAuxiliar:CalendarioAuxiliar[])=>{
        this.listCalendarioAuxiliar = calendarioAuxiliar;
        this.setCalendarFormAuxiliar();
      });
    }, err =>{
      console.log('Error al obtener los plan pems', err);
    });
  }

}
