import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup,  Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { concatMap } from 'rxjs/operators';
import { InventarioEquipo } from 'src/app/models/InventarioEquipo';
import { EquipoService } from 'src/app/services/equipoService/equipo.service';


@Component({
  selector: 'app-inventario-equipo',
  templateUrl: './inventario-equipo.component.html',
  styleUrls: ['./inventario-equipo.component.css']
})
export class InventarioEquipoComponent implements OnInit {

  validateForm: FormGroup;
  listLugares: [];
  listDepartamentos: [];
  listAreas: [];
  stateForm: boolean =false;
  cmbDepartamentos;
  cmbAreas;

  constructor(private fb: FormBuilder, private equipoService: EquipoService, private message: NzMessageService,private modal: NzModalRef) {
    this.validateForm = this.fb.group({
      codigo: ['', [Validators.required]],
      tipo: ['', [ Validators.required]],
      descripcion: ['', []],
      lugar: ['', [Validators.required]],
      departamento: ['', [Validators.required]],
      area: ['', [Validators.required]],
      condicionGeneral: ['', [Validators.required]],
      mantenimiento: ['', []],
    });
  }

  ngOnInit(): void {
    this.getUbicacion();
  }

  changeLugar(value){
    if(value){
    this.cmbDepartamentos = this.listDepartamentos.filter(dep => dep['lugarId'] === value);
    }
  }

  changeDepartamento(value){
    if(value){
      this.cmbAreas = this.listAreas.filter(area => area['departamentoId'] === value);
    }
  }

  getUbicacion(){
    this.equipoService.getLugares().subscribe( (lugares:any)=>{
      this.listLugares = lugares;
      this.equipoService.getDepartamentos().subscribe((dep:any)=>{
        this.listDepartamentos = dep;
        this.equipoService.getAreas().subscribe((areas:any)=>{
          this.listAreas = areas;
          this.stateForm = true;
        }, err=>{
          this.stateForm = false;
          console.log('Error no se obtuvieron las areas')
        });
      }, err =>{
        this.stateForm = false;
        console.log('Error no se obtuvieron los departamentos');
      });
    }, erro =>{
      this.stateForm = false;
      console.log('Error no se obtuvieron los lugares')
    });
  }

  submitForm(value: { codigo: string; tipo: string; descripcion: string; lugar: string; departamento: string, area: string, condicionGeneral: string, mantenimiento: boolean }): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    if(this.validateForm.status === 'VALID'){
      const objMessage = this.message.loading('Espere... Guardando!');
      let lugar = this.listLugares.find(lugar => lugar['id'] === value.lugar);
      let dep = this.listDepartamentos.find(dep => dep['id'] === value.departamento);
      let area = this.listAreas.find(area => area['id'] === value.area);
      const equipo = new InventarioEquipo();
      equipo.codigo = value.codigo;
      equipo.tipo = value.tipo;
      equipo.ubicacion = { lugar: lugar['nombre'], departamento: dep['nombre'], area: area['nombre'] };
      equipo.condicionGeneral = value.condicionGeneral;
      equipo.descripcion = value.descripcion;
      if(value.mantenimiento === true){
        equipo.mantenimiento = true;
      } else { equipo.mantenimiento = false; }
      this.equipoService.saveInventarioEquipo(equipo).subscribe((resp:any)=>{
        console.log(resp);
        objMessage.onClose!.pipe(
          concatMap(() => this.message.success('Equipo Registrado en Inventario!', { nzDuration: 3500 }).onClose!),
        )
        .subscribe(() => {
          this.validateForm.reset();
          console.log('All completed!');
        });
      }, err =>{
        objMessage.onClose!.pipe(
          concatMap(() => this.message.error('Error al Registrar el Equipo!', { nzDuration: 3500 }).onClose!),
        )
        .subscribe(() => {
          console.log('All completed!');
        });
      });
    }
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

}
