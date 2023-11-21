import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dialCode'
})
export class DialCodePipe implements PipeTransform {
  transform(dialoCode: string): string {
    if (!dialoCode) return '';
    return `+${ dialoCode }`;
  }
}
