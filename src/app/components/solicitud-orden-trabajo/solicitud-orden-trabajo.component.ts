import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { concatMap } from 'rxjs/operators';
import { InventarioEquipo } from 'src/app/models/InventarioEquipo';
import { SolicitudOrdenTrabajo } from 'src/app/models/SolicitudOrdenTrabajo';
import { EquipoService } from 'src/app/services/equipoService/equipo.service';
import { MantenimientoService } from 'src/app/services/mantenimientoService/matenimientoService.service';

@Component({
  selector: 'app-solicitud-orden-trabajo',
  templateUrl: './solicitud-orden-trabajo.component.html',
  styleUrls: ['./solicitud-orden-trabajo.component.css']
})
export class SolicitudOrdenTrabajoComponent implements OnInit {

  validateForm: FormGroup;
  listEquipos: InventarioEquipo[];
  stateForm = false;

  constructor(private fb: FormBuilder,private mantto: MantenimientoService, private equipoService: EquipoService, private  message: NzMessageService, private modal: NzModalRef) {
      this.validateForm = this.fb.group({
        nombreSolicitante: ['',[Validators.required]],
        referenciaOrdenTrabajo: ['', [Validators.required]],
        codigoEquipo: ['', [Validators.required]],
        esFallaEmergencia: ['', [Validators.required]],
        esFallaCorrectiva: ['', [Validators.required]],
        causaFalla: ['', [Validators.required]],
        descripcionFalla: ['', [Validators.required]],
        fechaProgramacionTrabajo: ['', [Validators.required]],
      });
   }

  ngOnInit(): void {
    this.getEquipos();
  }

  submitForm(value){
    let solicitud = new SolicitudOrdenTrabajo();
    solicitud = value;
    const objMessage = this.message.loading('Espere... Guardando Datos!')
    this.mantto.saveSolicitudOrdenTrabajo(solicitud).subscribe((resp:any)=>{
      objMessage.onClose!.pipe(
        concatMap(() => this.message.success('Solicitud Guardado!', { nzDuration: 2000 }).onClose!),
      )
      .subscribe(() => {
        console.log('All completed!');
      });
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


  getEquipos(){
    this.equipoService.findAllEquipos().subscribe((resp: InventarioEquipo[])=>{
      this.listEquipos = resp;
      this.stateForm = true;
    }, err => {
      console.log('Error al obtener los equipos',err);
    });
  }

  resetForm(){
    this.validateForm.reset();
  }

  destroyModal(){
    this.modal.close();
  }

}
