import { Injectable } from '@angular/core';
import { FichaTecnica } from 'src/app/models/FichaTecnica';
import { InventarioEquipo } from 'src/app/models/InventarioEquipo';
import { HttpService } from '../httpService/http.service';

@Injectable()
export class EquipoService {

    constructor(private httpService: HttpService){}

    saveInventarioEquipo(inventarioEquipo: InventarioEquipo){
      return this.httpService.post('equipos', inventarioEquipo, {});
    }

    findAllEquipos(){
      return this.httpService.get('equipos',{});
    }

    findByIdFichaTecnica(id){
      return this.httpService.get(`ficha-tecnicas/${id}`,{});
    }

    findAllFichaTecnica(){
      return this.httpService.get('ficha-tecnicas/',{});
    }

    createFichaTecnica(fichaTecnica: FichaTecnica){
      return this.httpService.post('ficha-tecnicas/', fichaTecnica,{});
    }

    updateFichaTecnica(fichaTecnica: FichaTecnica){
      return this.httpService.update(`ficha-tecnicas/${fichaTecnica.id}`, fichaTecnica, {});
    }


    getLugares(){
        return this.httpService.get('lugares',{});
    }

    getDepartamentos(){
        return this.httpService.get('departamentos',{});
    }

    getAreas(){
        return this.httpService.get('areas',{});
    }

}
