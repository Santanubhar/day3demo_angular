import {Component} from '@angular/core';

@Component({
  selector: 'parent-selector',
  templateUrl: 'app/parent.component.html'
 })
export class ParentComponent { 
    onNotify(message:string):void {
            alert(message);
  }
}