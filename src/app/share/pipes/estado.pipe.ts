import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estado'
})
export class EstadoPipe implements PipeTransform {

  transform(value: string): string {
    if(value === 'pendiente'){
      return 'warning'
    }
    else if(value === 'aceptada'){
      return 'success';
    }
  }

}
