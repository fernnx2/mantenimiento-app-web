import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { concatMap } from 'rxjs/operators';
import { TipoPems } from 'src/app/models/TipoPems';
import { EquipoService } from 'src/app/services/equipoService/equipo.service';
import { MantenimientoService } from 'src/app/services/mantenimientoService/matenimientoService.service';

@Component({
  selector: 'app-tipo-pems',
  templateUrl: './tipo-pems.component.html',
  styleUrls: ['./tipo-pems.component.css']
})
export class TipoPemsComponent implements OnInit {

  validateForm: FormGroup;
  stateForm:boolean = true;


  constructor(private fb: FormBuilder, private equipoService: EquipoService, private mantto: MantenimientoService, private message: NzMessageService) {
    this.validateForm = this.fb.group({
      codigoTipoProcedimiento: [[''], [Validators.required]],
      descripcionTipoProcedimiento: [[''], [Validators.required]],

    });
  }

  ngOnInit(): void {
  }

  submitForm(value: TipoPems){
    const objMessage = this.message.loading('Espere... Guardando Datos!')
    this.mantto.saveTipoPems(value).subscribe((resp:any)=>{
      objMessage.onClose!.pipe(
        concatMap(() => this.message.success('Tipo Pems Guardado!', { nzDuration: 2000 }).onClose!),
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
