import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { concatMap } from 'rxjs/operators';
import { Pem } from 'src/app/models/Pem';
import { TipoPems } from 'src/app/models/TipoPems';
import { EquipoService } from 'src/app/services/equipoService/equipo.service';
import { MantenimientoService } from 'src/app/services/mantenimientoService/matenimientoService.service';

@Component({
  selector: 'app-pem-form',
  templateUrl: './pem-form.component.html',
  styleUrls: ['./pem-form.component.css']
})
export class PemFormComponent implements OnInit {

  validateForm: FormGroup;
  stateForm: boolean = true;
  listTipoPem: TipoPems[];

  constructor(private fb: FormBuilder, private equipoService: EquipoService,private mantto: MantenimientoService, private message: NzMessageService,private modal: NzModalRef) {
    this.validateForm = this.fb.group({
      codigoPem: ['',[Validators.required]],
      tipoEquipo: ['', [Validators.required]],
      objetivoProcedimiento: ['',[Validators.required]],
      descripcionProcedimiento: ['', [Validators.required]],
      nombreCreador: ['', [Validators.required]],
      nombrePem: ['', [Validators.required]],
      descripcionPem: ['', [Validators.required]],
      frecuenciaEnMeses: ['',[Validators.required]],
      tipoPem: ['', [Validators.required]],
      tareasPem: ['',[Validators.required]],
      manoObra: [''],
      repuestosMateriales: ['']
    });
   }

   getListTipoPem(){
    this.mantto.findAllTipoPems().subscribe((resp: TipoPems[])=>{
      this.listTipoPem = resp;
    }, err =>{
      console.log('Error al obtener los tipos de pems');
    })
   }

  ngOnInit(): void {
    this.getListTipoPem();
  }

  submitForm(value){
    let pem = new Pem();
    pem = value;
    pem.tipoPem = this.listTipoPem.find(e => e.codigoTipoProcedimiento = value.tipoPem);
    pem.tareasPem = {tarea: value.tareasPem};
    pem.manoObra = {data: value.manoObra};
    pem.repuestosMateriales = {data: value.repuestosMateriales};
    console.log(pem);
    const objMessage = this.message.loading('Espere... Creando Nuevo PEM!')
    this.mantto.savePem(pem).subscribe((resp:any)=>{
      objMessage.onClose!.pipe(
        concatMap(() => this.message.success('Ficha Tecnica Creada!', { nzDuration: 2000 }).onClose!),
      )
      .subscribe(() => {
        console.log('All completed!');
      });

    }, error => {
      console.log(error);
        objMessage.onClose!.pipe(
          concatMap(() => this.message.error('Error al Actualizar la Ficha Tecnica!', { nzDuration: 2000 }).onClose!),
        )
        .subscribe(() => {
          console.log('All completed!');
        });
    })
  }

  destroyModal(){
    this.modal.close();
  }
}
