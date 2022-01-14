import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titre',
})
export class TitrePipe implements PipeTransform {
  transform(value: string, content: string): string {
    if (content.split(' ').length > 20) {
      return value + ' ⭐';
    } else {
      return value + ' 🍎';
    }
  }
}
