import { Pipe, PipeTransform } from '@angular/core';
import { format, parseISO } from 'date-fns';

@Pipe({
  name: 'dateFormat',
  standalone: true
})
export class DateFormatPipe implements PipeTransform {

  transform(value: Date, dateFormat: string = 'MMMM do, yyyy h:mm a'): string {
    return format(parseISO(value.toString()), dateFormat);
  }

}
