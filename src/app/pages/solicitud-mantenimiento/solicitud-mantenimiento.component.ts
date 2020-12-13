import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { OrdenTrabajoComponent } from 'src/app/components/orden-trabajo/orden-trabajo.component';
import { SolicitudOrdenTrabajoComponent } from 'src/app/components/solicitud-orden-trabajo/solicitud-orden-trabajo.component';
import { OrdenTrabajo } from 'src/app/models/OrdenTrabajo';
import { SolicitudOrdenTrabajo } from 'src/app/models/SolicitudOrdenTrabajo';
import { MantenimientoService } from 'src/app/services/mantenimientoService/matenimientoService.service';

@Component({
  selector: 'app-solicitud-mantenimiento',
  templateUrl: './solicitud-mantenimiento.component.html',
  styleUrls: ['./solicitud-mantenimiento.component.css']
})
export class SolicitudMantenimientoComponent implements OnInit {

  visible = false;
  listOfData: SolicitudOrdenTrabajo[];
  listOrdenTrabajo: OrdenTrabajo[];
  listUsers: any[];
  viewManto = {
    solicitud: null,
    orden: null,
    user: null
  }

  listOfColumn = [
    {
      title: 'Solicitante',
      sortFn: (a: SolicitudOrdenTrabajo, b: SolicitudOrdenTrabajo) => a.nombreSolicitante.localeCompare(b.nombreSolicitante),
      priority: 1
    },
    {
      title: 'Prioridad',
      priority: 2
    },
    {
      title: 'Fecha Solicitud',
      priority: 1
    },
    {
      title: 'Estatus',
      sortFn: (a: SolicitudOrdenTrabajo, b: SolicitudOrdenTrabajo) => a.estatus.localeCompare(b.estatus),
      priority: 1
    },
    {
      title: 'Accion'
    }
  ];


  constructor(private viewContainerRef: ViewContainerRef, private modal: NzModalService, private mmtto: MantenimientoService) { }

  ngOnInit(): void {
    this.getDataTable();
  }

  createComponentModal(): void {
    const modal = this.modal.create({
      nzTitle: 'Solicitud',
      nzContent: SolicitudOrdenTrabajoComponent,
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
      this.getDataTable();
    });

    // delay until modal instance created
    setTimeout(() => {
    }, 2000);
  }

  getDataTable(){
    this.mmtto.findAllSolicitudOrdenTrabajo().subscribe((resp:SolicitudOrdenTrabajo[])=>{
      this.listOfData = resp;
    }, err =>{
      console.log('Error al obtener las ordenes de trabajo:', err);
    })
  }

  ordenTrabajo(value): void {
    let solicitud = this.listOfData.find(sol => sol.id === value);
    const modal = this.modal.create({
      nzTitle: 'Solicitud',
      nzContent: OrdenTrabajoComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzWidth: 700,
      nzComponentParams: {
        solicitudOrdenTrabajo: solicitud,
      },
      nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000)),
      nzFooter: [
      ]
    });
    const instance = modal.getContentComponent();
    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
    // Return a result when closed
    modal.afterClose.subscribe(result => {
      this.getDataTable();
    });

    // delay until modal instance created
    setTimeout(() => {
    }, 2000);
  }

  close(){
    this.visible = false;
  }

  openView(value){
    this.mmtto.findAllOrdenesTrabajo().subscribe((resp: OrdenTrabajo[])=>{
      this.listUsers = resp;
        this.listOrdenTrabajo = resp;
        this.viewManto.orden = this.listOrdenTrabajo.find(o => o.idSolicitudOrdenTrabajo === value);
        this.viewManto.solicitud = this.listOfData.find(m => m.id === this.viewManto.orden.idSolicitudOrdenTrabajo);
      this.mmtto.getUsers().subscribe((resp: any[])=>{
        this.listUsers = resp;
        this.viewManto.user = this.listUsers.find(u => u.id === this.viewManto.orden.personaDesignada)
        console.log(this.listUsers.find(u => u.id === this.viewManto.orden.personaDesignada));
        this.visible = true;

      });

    })
  }

}
