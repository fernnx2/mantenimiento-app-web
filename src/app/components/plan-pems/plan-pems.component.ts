import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { concatMap } from 'rxjs/operators';
import { InventarioEquipo } from 'src/app/models/InventarioEquipo';
import { PlanPems } from 'src/app/models/PlanPems';
import { TipoPems } from 'src/app/models/TipoPems';
import { EquipoService } from 'src/app/services/equipoService/equipo.service';
import { MantenimientoService } from 'src/app/services/mantenimientoService/matenimientoService.service';

@Component({
  selector: 'app-plan-pems',
  templateUrl: './plan-pems.component.html',
  styleUrls: ['./plan-pems.component.css']
})
export class PlanPemsComponent implements OnInit {

  validateForm: FormGroup;
  stateForm: boolean = false;
  listEquipos: InventarioEquipo[];
  listTipoPem: TipoPems[];
  listPems: [];

  constructor(private fb: FormBuilder, private equipoService: EquipoService, private mantto: MantenimientoService, private message: NzMessageService) {
    this.validateForm = this.fb.group({
      codigoEquipo: ['',[Validators.required]],
      frecuenciaProcedimiento: ['', [Validators.required]],
      codigoPem: ['', [Validators.required]],
      fechaInicio: ['', [Validators.required]]
    });
   }

  ngOnInit(): void {
    this.getEquipos();
    this.getTipoPems();
  }

  getEquipos(){
    this.equipoService.findAllEquipos().subscribe((equipos: InventarioEquipo[]) =>{
      this.listEquipos = equipos;
      this.stateForm = true;
    }, error =>{
      this.stateForm = false;
      console.log('Error no se obtuvieron los equipos!', error);
    })
  }
  getTipoPems(){
    this.mantto.findAllTipoPems().subscribe((tipoPem: TipoPems[]) =>{
      this.listTipoPem= tipoPem;
      this.stateForm = true;
    }, error =>{
      this.stateForm = false;
      console.log('Error no se obtuvieron los equipos!', error);
    })
  }

  submitForm(value){
    value.tipoPem = this.listTipoPem.find(tipo => tipo.id = value.tipoPem);
    let plan = new PlanPems();
    plan = value;
    const objMessage = this.message.loading('Espere... Guardando Datos!')
    this.mantto.savePlanPems(plan).subscribe((resp:any)=>{
      objMessage.onClose!.pipe(
        concatMap(() => this.message.success('Plan Pems Guardado!', { nzDuration: 2000 }).onClose!),
      )
      .subscribe(() => {
        console.log('All completed!');
      });
    }, error =>{
      objMessage.onClose!.pipe(
        concatMap(() => this.message.error('Error al guardar!' + error, { nzDuration: 2000 }).onClose!),
      )
      .subscribe(() => {
        console.log('All completed!');
      });
    });
  }

}
