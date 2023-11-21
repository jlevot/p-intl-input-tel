import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform<T>(items: T[] | null, field: string, value: any): T[] {
    if (!items) return [];
    // @ts-ignore
    return items.filter((item: T) => item[field] === value);
  }
}
