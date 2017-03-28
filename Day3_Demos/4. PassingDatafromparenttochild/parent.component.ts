import {Component} from '@angular/core';

@Component({
  selector: 'parent-selector',
  templateUrl: 'app/parent.component.html'
})
export class ParentComponent { 
    childData : string = "data passed to child";
}