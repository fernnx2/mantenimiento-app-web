import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { InventarioEquipo } from 'src/app/models/InventarioEquipo';
import { EquipoService } from 'src/app/services/equipoService/equipo.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import {InventarioEquipoComponent} from '../../components/inventario-equipo/inventario-equipo.component';
@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  listDataTable: InventarioEquipo[];
  isVisible = false;

  listOfColumn = [
    {
      title: 'Codigo',
      sortFn: (a: InventarioEquipo, b: InventarioEquipo) => a.codigo.localeCompare(b.codigo),
      priority: 3
    },
    {
      title: 'Tipo',
      sortFn: (a: InventarioEquipo, b: InventarioEquipo) => a.tipo.localeCompare(b.tipo),
      priority: 2
    },
    {
      title: 'Ubicacion',
      sortFn: (a: InventarioEquipo, b: InventarioEquipo) => a.ubicacion['lugar'].localeCompare(b.ubicacion['lugar']),
      priority: 1
    },
    {
      title: 'Condicion',
      priority: 1
    },
    {
      title: 'Mantenimiento',
      sortFn: (a: InventarioEquipo, b: InventarioEquipo) => a.mantenimiento.valueOf() === false,
      priority: 1
    },
    {
      title: 'Accion'
    }
  ];


  constructor(private equipoService: EquipoService, private modal: NzModalService,private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    this.getDataTable();
  }

  getDataTable(){
    this.equipoService.findAllEquipos().subscribe((resp: InventarioEquipo[]) =>{
      this.listDataTable = resp;
    }, err =>{
      console.log('error');
    });
  }

  createComponentModal(): void {
    const modal = this.modal.create({
      nzTitle: 'Registrar Equipo En Inventario',
      nzContent: InventarioEquipoComponent,
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

}
