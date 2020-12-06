import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { concatMap } from 'rxjs/operators';
import { FichaTecnica } from 'src/app/models/FichaTecnica';
import { EquipoService } from 'src/app/services/equipoService/equipo.service';

@Component({
  selector: 'app-ficha-tecnica',
  templateUrl: './ficha-tecnica.component.html',
  styleUrls: ['./ficha-tecnica.component.css']
})
export class FichaTecnicaComponent implements OnInit {

  @Input() idEquipo: string;
  @Input() tipoEquipo: string;
  validateForm: FormGroup;
  fichaTecnica : FichaTecnica;
  stateForm = false;
  editFichaTecnica: boolean = false;
  constructor(private fb: FormBuilder, private equipoService: EquipoService, private message: NzMessageService,private modal: NzModalRef) {

    this.validateForm = this.fb.group({
      codigoFichaTecnica: ['', [Validators.required]],
      fechaElaboracion: ['', [Validators.required]],
      nombreResponsable: ['', [Validators.required]],
      descripcionEquipo: ['', []],
      modeloEquipo: ['', []],
      numeroSerieEquipo: ['', []],
      anioFabricacion: ['', [Validators.required]],
      nombreFabricante: ['', [Validators.required]],
      telefonoFabricante: ['', []],
      nombreProveedor: ['', [Validators.required]],
      telefonoProveedor: ['', []],
      nombresProveedoresRepuestos: ['', [Validators.required]],
      fechaCompra: ['', [Validators.required]],
      fechaInstalacion: ['', [Validators.required]],
      costoAdquisicion: ['', [Validators.required]],
      costoReemplazo: ['', []],
      garantia: [false, []],
      vencimientoGarantia: ['', []],
      contratoMantenimiento: [false, []],
      vencimientoContratoMantenimiento: ['', []],
      vidaUtilEsperada: ['', []],
      incluyeManuales: [false, []],
      incluyePlanos: [false, []],
      incluyeCD: [false, []],
      voltage: ['', []],
      amperaje: ['', []],
      cantidadFases: ['', []],
      pesoKg: ['', []],
      largo: ['', []],
      ancho: ['', []],
      alto: ['', []],
      incluyeHerramientas: [false, []],
      descripcionHerramientas: ['', []],
      observaciones: ['', []]
    });
  }

  ngOnInit(): void {
    this.getFichaTecnica();
  }

  getFichaTecnica(){
    this.fichaTecnica = new FichaTecnica();
    this.equipoService.findAllFichaTecnica().subscribe( (ficha: FichaTecnica[])=>{
      this.fichaTecnica = ficha.find(element => element.equipoId === this.idEquipo);
      if(this.fichaTecnica){
        this.setDataForm(this.fichaTecnica);
        this.editFichaTecnica = true;
        this.stateForm = true;
      }else{
        console.log('no hay ficha tecnica');
        this.editFichaTecnica = false;
        this.stateForm = true;
      }


    })
  }

  setDataForm(dataForm: FichaTecnica){
    this.validateForm.get('codigoFichaTecnica').setValue(dataForm.codigoFichaTecnica);
    this.validateForm.get('fechaElaboracion').setValue(dataForm.fechaElaboracion);
    this.validateForm.get('nombreResponsable').setValue(dataForm.nombreResponsable);
    this.validateForm.get('descripcionEquipo').setValue(dataForm.descripcionEquipo);
    this.validateForm.get('modeloEquipo').setValue(dataForm.modeloEquipo);
    this.validateForm.get('numeroSerieEquipo').setValue(dataForm.numeroSerieEquipo);
    this.validateForm.get('anioFabricacion').setValue(dataForm.anioFabricacion);
    this.validateForm.get('nombreFabricante').setValue(dataForm.nombreFabricante);
    this.validateForm.get('telefonoFabricante').setValue(dataForm.telefonoFabricante);
    this.validateForm.get('nombreProveedor').setValue(dataForm.nombreProveedor);
    this.validateForm.get('telefonoProveedor').setValue(dataForm.telefonoProveedor);
    this.validateForm.get('nombresProveedoresRepuestos').setValue(dataForm.nombresProveedoresRepuestos);
    this.validateForm.get('fechaCompra').setValue(dataForm.fechaCompra);
    this.validateForm.get('fechaInstalacion').setValue(dataForm.fechaInstalacion);
    this.validateForm.get('costoAdquisicion').setValue(dataForm.costoAdquisicion);
    this.validateForm.get('costoReemplazo').setValue(dataForm.costoReemplazo);
    this.validateForm.get('garantia').setValue(dataForm.garantia);
    this.validateForm.get('vencimientoGarantia').setValue(dataForm.vencimientoGarantia);
    this.validateForm.get('contratoMantenimiento').setValue(dataForm.contratoMantenimiento);
    this.validateForm.get('vencimientoContratoMantenimiento').setValue(dataForm.vencimientoContratoMantenimiento);
    this.validateForm.get('vidaUtilEsperada').setValue(dataForm.vidaUtilEsperada);
    this.validateForm.get('incluyeManuales').setValue(dataForm.incluyeManuales);
    this.validateForm.get('incluyePlanos').setValue(dataForm.incluyePlanos);
    this.validateForm.get('incluyeCD').setValue(dataForm.incluyeCD);
    this.validateForm.get('voltage').setValue(dataForm.voltage);
    this.validateForm.get('amperaje').setValue(dataForm.amperaje);
    this.validateForm.get('cantidadFases').setValue(dataForm.cantidadFases);
    this.validateForm.get('pesoKg').setValue(dataForm.pesoKg);
    this.validateForm.get('largo').setValue(dataForm.dimensiones['largo']);
    this.validateForm.get('ancho').setValue(dataForm.dimensiones['ancho']);
    this.validateForm.get('alto').setValue(dataForm.dimensiones['alto']);
    this.validateForm.get('incluyeHerramientas').setValue(dataForm.incluyeHerramientas);
    this.validateForm.get('descripcionHerramientas').setValue(dataForm.descripcionHerramientas);
    this.validateForm.get('observaciones').setValue(dataForm.observaciones);
  }


  submitForm(value: FichaTecnica) {
    const ficha = new FichaTecnica();
      ficha.codigoFichaTecnica = value.codigoFichaTecnica;
      ficha.equipoId = this.idEquipo;
      ficha.fechaElaboracion = value.fechaElaboracion;
      ficha.nombreResponsable = value.nombreResponsable;
      ficha.descripcionEquipo = value.descripcionEquipo;
      ficha.tipoEquipo = this.tipoEquipo;
      ficha.modeloEquipo = value.modeloEquipo;
      ficha.numeroSerieEquipo = value.numeroSerieEquipo;
      ficha.anioFabricacion = value.anioFabricacion;
      ficha.nombreFabricante = value.nombreFabricante ;
      ficha.telefonoFabricante = value.telefonoFabricante;
      ficha.nombreProveedor = value.nombreProveedor;
      ficha.telefonoProveedor = value.telefonoProveedor ;
      ficha.nombresProveedoresRepuestos = value.nombresProveedoresRepuestos;
      ficha.fechaCompra = value.fechaCompra;
      ficha.fechaInstalacion = value.fechaInstalacion;
      ficha.costoAdquisicion = value.costoAdquisicion;
      ficha.costoReemplazo = value.costoReemplazo;
      ficha.garantia = value.garantia;
      ficha.vencimientoGarantia = value.vencimientoGarantia;
      ficha.contratoMantenimiento = value.contratoMantenimiento;
      ficha.vencimientoContratoMantenimiento = value.vencimientoContratoMantenimiento;
      ficha.vidaUtilEsperada = value.vidaUtilEsperada;
      ficha.incluyeManuales = value.incluyeManuales;
      ficha.incluyePlanos = value.incluyePlanos;
      ficha.incluyeCD = value.incluyeCD;
      ficha.voltage = value.voltage;
      ficha.amperaje = value.amperaje;
      ficha.cantidadFases = value.cantidadFases;
      ficha.pesoKg = value.pesoKg;
      ficha.dimensiones = { largo: value['largo'], ancho: value['ancho'], alto: value['alto'] };;
      ficha.incluyeHerramientas = value.incluyeHerramientas;
      ficha.descripcionHerramientas = value.descripcionHerramientas;
      ficha.observaciones = value.observaciones;
      this.deletePropsEmpty(ficha);
      console.log('ficha pase: ', ficha);
    if(this.editFichaTecnica){
      ficha.id = this.fichaTecnica.id;
      const objMessage = this.message.loading('Espere... Acualizando Datos!')
      this.equipoService.updateFichaTecnica(ficha).subscribe((resp: any)=>{
        console.log(resp);
        objMessage.onClose!.pipe(
          concatMap(() => this.message.success('Ficha Tecnica Actualizada!', { nzDuration: 2000 }).onClose!),
        )
        .subscribe(() => {
          console.log('All completed!');
        });
      }, err =>{
        console.log(err);
        objMessage.onClose!.pipe(
          concatMap(() => this.message.error('Error al Actualizar la Ficha Tecnica!', { nzDuration: 2000 }).onClose!),
        )
        .subscribe(() => {
          console.log('All completed!');
        });
      });
    } else {
      const objMessage = this.message.loading('Espere... Creando Nueva Ficha Tecnica!')
      this.equipoService.createFichaTecnica(ficha).subscribe((resp:any)=>{
        console.log(resp);
        objMessage.onClose!.pipe(
          concatMap(() => this.message.success('Ficha Tecnica Creada!', { nzDuration: 2000 }).onClose!),
        )
        .subscribe(() => {
         this.getFichaTecnica();
          console.log('All completed!');
        });
      }, err =>{
        console.log(err);
        objMessage.onClose!.pipe(
          concatMap(() => this.message.error('Error al Actualizar la Ficha Tecnica!', { nzDuration: 2000 }).onClose!),
        )
        .subscribe(() => {
          console.log('All completed!');
        });
      });
    }

  }

  deletePropsEmpty(obj: object){
    Object.keys(obj).forEach(prop =>{
      if(obj[prop] === ""){
        delete obj[prop];
        console.log('delete',prop);
      }
    })
  }


  destroyModal(): void {
    this.modal.destroy();
  }

}
