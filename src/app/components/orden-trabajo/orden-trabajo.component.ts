import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { concatMap } from 'rxjs/operators';
import { CalendarioAuxiliar } from 'src/app/models/CalendarioAuxiliar';
import { OrdenTrabajo } from 'src/app/models/OrdenTrabajo';
import { Pem } from 'src/app/models/Pem';
import { SolicitudOrdenTrabajo } from 'src/app/models/SolicitudOrdenTrabajo';
import { MantenimientoService } from 'src/app/services/mantenimientoService/matenimientoService.service';

@Component({
  selector: 'app-orden-trabajo',
  templateUrl: './orden-trabajo.component.html',
  styleUrls: ['./orden-trabajo.component.css']
})
export class OrdenTrabajoComponent implements OnInit {

  @Input() solicitudOrdenTrabajo: SolicitudOrdenTrabajo;
  validateForm: FormGroup;
  stateForm = false;
  usuarios: any;
  pem: Pem[];

  constructor(private fb: FormBuilder,private  message: NzMessageService, private mmato: MantenimientoService, private modal: NzModalRef) {
    this.validateForm = this.fb.group({
      fechaARealizar: ['', [Validators.required]],
      fechaDesarrolloTrabajo: ['', Validators.required],
      personaDesignada: ['', [Validators.required]],
      codigoPem: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  submitForm(value){
    let orden = new OrdenTrabajo();
    let calendarioAuxiliar = new CalendarioAuxiliar();
    orden.fechaARealizar = value.fechaARealizar;
    orden.fechaDesarrolloTrabajo = value.fechaDesarrolloTrabajo;
    orden.idSolicitudOrdenTrabajo = this.solicitudOrdenTrabajo.id;
    orden.personaDesignada = value.personaDesignada;
    const objMessage = this.message.loading('Espere... Guardando Datos!')
    this.mmato.saveOrdenTrabajo(orden).subscribe((resp:any)=>{
      calendarioAuxiliar.fechaProgramacionTrabajo = resp.fechaARealizar;
      calendarioAuxiliar.codigoPem = value.codigoPem;
      calendarioAuxiliar.numeroOrdenTrabajo = resp.id;
      this.mmato.saveCalendarioAuxilar(calendarioAuxiliar).subscribe((resp:any)=>{
        this.solicitudOrdenTrabajo.estatus = 'aceptada';
        this.mmato.updateSolicitudOrdenTrabajo(this.solicitudOrdenTrabajo).subscribe((resp:any)=>{
          objMessage.onClose!.pipe(
            concatMap(() => this.message.success('Solicitud Guardado!', { nzDuration: 2000 }).onClose!),
          )
          .subscribe(() => {
            console.log('All completed!');
          });
        })
      })
    }, error =>{
      console.log(error);
      objMessage.onClose!.pipe(
        concatMap(() => this.message.error('Error al guardar!' + error, { nzDuration: 2000 }).onClose!),
      )
      .subscribe(() => {
        console.log('All completed!');
      });
    });

  }

  getUsers(){
    this.mmato.getUsers().subscribe((resp:any)=>{
      this.usuarios = resp;
      this.mmato.findAllPems().subscribe((resp:Pem[])=>{
        this.pem = resp;
        this.stateForm = true;
      })
    });
  }


  destroyModal(){
    this.modal.close();
  }

}
