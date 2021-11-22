import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hoursFormat'
})
export class HoursFormatPipe implements PipeTransform {

  transform(value: number): any {
    let totalSeconds = value;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);

    let format = ``;

    if (hours > 1)
      format += `${hours} hours `
    if (hours > 0 && hours < 1)
      format += `${hours} hour `
    if (minutes > 1)
      format += `${minutes} minutes `
    if (minutes > 0 && minutes < 1)
      format += `${minutes} minute `

  
    return format;



  }

}
