import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'length'})
export class LengthPipe implements PipeTransform {
        
  transform(value:string, displayMessage: boolean): string {
    return displayMessage ? `${value} ${value.length}` : `${value.length}`
  }
    
}

