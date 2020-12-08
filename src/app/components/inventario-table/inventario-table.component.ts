import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { InventarioEquipo } from 'src/app/models/InventarioEquipo';
import { FichaTecnicaComponent } from '../ficha-tecnica/ficha-tecnica.component';

@Component({
  selector: 'app-inventario-table',
  templateUrl: './inventario-table.component.html',
  styleUrls: ['./inventario-table.component.css']
})
export class InventarioTableComponent implements OnInit {

  @Input() listOfData: InventarioEquipo[];
  @Input() listOfColumn: [];

  constructor(private modal: NzModalService,private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {

  }

  crearFichaTecnica(idEquipo:string, tipo: string){
    const modal = this.modal.create({
      nzTitle: 'Ficha Tecnica de Equipo',
      nzContent: FichaTecnicaComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzWidth: 1000,
      nzComponentParams: {
        idEquipo: idEquipo,
        tipoEquipo: tipo
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
