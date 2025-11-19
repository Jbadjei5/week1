import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) 
      return '';
    const parts =value.split(' ');
return parts.map(part => part.charAt(0).toUpperCase()).join('');    
  }
  }