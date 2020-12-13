import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { PemFormComponent } from 'src/app/components/pem-form/pem-form.component';
import { Pem } from 'src/app/models/Pem';
import { MantenimientoService } from 'src/app/services/mantenimientoService/matenimientoService.service';

@Component({
  selector: 'app-pems',
  templateUrl: './pems.component.html',
  styleUrls: ['./pems.component.css']
})
export class PemsComponent implements OnInit {

  visible = false;
  viewPem: Pem;
  listOfData: Pem[];
  listOfColumn = [
    {
      title: 'Codigo',
      sortFn: (a: Pem, b: Pem) => a.codigoPem.localeCompare(b.codigoPem),
      priority: 3
    },
    {
      title: 'Tipo Equipo',
      sortFn: (a: Pem, b: Pem) => a.tipoEquipo.localeCompare(b.tipoEquipo),
      priority: 2
    },
    {
      title: 'Tipo Pem',
      sortFn: (a: Pem, b: Pem) => a.tipoPem['codigoTipoProcedimiento'].localeCompare(b.tipoPem['codigoTipoProcedimiento']),
      priority: 1
    },
    {
      title: 'Nombre Pem',
    },
    {
      title: 'Accion'
    }
  ];



  constructor(private manttoService: MantenimientoService,private modal: NzModalService,private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    this.getDataTable();
  }

  createComponentModal(): void {
    const modal = this.modal.create({
      nzTitle: 'Registrar Procesamiento Estandar De Mantenimiento',
      nzContent: PemFormComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzWidth: 1000,
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
    this.manttoService.findAllPems().subscribe((resp: Pem[])=>{
      this.listOfData = resp;
    }, err=>{
      console.log('Error l obtener los pems', err);
    });
  }

  verPem(value){
    this.viewPem = this.listOfData.find(p => p.id === value);
    console.log(this.viewPem);
    this.visible = true;
  }

  close(){
    this.visible = false;
  }
  //

}
