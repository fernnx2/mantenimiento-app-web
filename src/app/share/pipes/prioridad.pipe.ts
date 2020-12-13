import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prioridad'
})
export class PrioridadPipe implements PipeTransform {

  transform(value: boolean, ): string {
    if(value){
      return 'ALTA';
    }
    return 'BAJA';
  }

}
