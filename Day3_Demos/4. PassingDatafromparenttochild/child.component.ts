import { Component, Input } from '@angular/core';

@Component({
  selector: 'child-selector',
  templateUrl: 'app/child.component.html'
})
export class ChildComponent {  
  @Input() title : string;
}

