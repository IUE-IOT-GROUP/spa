import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getFirstCharacter'
})
export class GetFirstCharacterPipe implements PipeTransform {

  transform(value: string): string {
    return value.charAt(0);
  }

}
