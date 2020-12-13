import { Injectable } from '@angular/core';
import { CalendarioAuxiliar } from 'src/app/models/CalendarioAuxiliar';
import { OrdenTrabajo } from 'src/app/models/OrdenTrabajo';
import { Pem } from 'src/app/models/Pem';
import { PlanPems } from 'src/app/models/PlanPems';
import { SolicitudOrdenTrabajo } from 'src/app/models/SolicitudOrdenTrabajo';
import { TipoPems } from 'src/app/models/TipoPems';
import { HttpService } from '../httpService/http.service';

@Injectable()
export class MantenimientoService {

    constructor(private httpService: HttpService){}

    saveTipoPems(data: TipoPems){
      return this.httpService.post('tipo-pems', data, {});
    }

    findAllTipoPems(){
      return this.httpService.get('tipo-pems', {});
    }

    savePlanPems(data: PlanPems){
      return this.httpService.post('plan-pems', data, {});
    }

    findAllPlanPems(){
      return this.httpService.get('plan-pems',{});
    }

    findByIdPlanPems(id){
      return this.httpService.get(`plan-pems/${id}`, {});
    }

    // pem
    savePem(data: Pem){
      return this.httpService.post('pems', data, {});
    }

    findAllPems(){
      return this.httpService.get('pems',{});
    }


    // solicitud y orden de trabajos

    saveSolicitudOrdenTrabajo(data: SolicitudOrdenTrabajo){
      return this.httpService.post('solicitudes-ordenes-trabajo', data, {});
    }

    findAllSolicitudOrdenTrabajo(){
      return this.httpService.get('solicitudes-ordenes-trabajo',{});
    }

    updateSolicitudOrdenTrabajo(solicitud: SolicitudOrdenTrabajo){
      return this.httpService.update(`solicitudes-ordenes-trabajo/${solicitud.id}`, solicitud, {});
    }


    saveOrdenTrabajo(data: OrdenTrabajo){
      return this.httpService.post('ordenes-trabajo',data, {});
    }

    findAllOrdenesTrabajo(){
      return this.httpService.get('ordenes-trabajo',{});
    }

    // calendario auxiliar
    saveCalendarioAuxilar(data: CalendarioAuxiliar){
      return this.httpService.post('calendario-auxiliar', data, {});
    }

    findAllCalendarioAuxiliar(){
      return this.httpService.get('calendario-auxiliar', {});
    }

    // find user
    getUsers(){
      return this.httpService.get('users',{});
    }
}
