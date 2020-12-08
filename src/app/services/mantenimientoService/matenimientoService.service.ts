import { Injectable } from '@angular/core';
import { PlanPems } from 'src/app/models/PlanPems';
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

}
