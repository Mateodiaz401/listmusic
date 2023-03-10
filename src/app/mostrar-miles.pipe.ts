import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mostrarMiles'
})
export class MostrarMilesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return (value < 100) ? 'menos de 100 vistas' : 'mas de 100 vistas';
  }

}
