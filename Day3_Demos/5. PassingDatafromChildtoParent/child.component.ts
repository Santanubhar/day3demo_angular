import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-selector',
  templateUrl: 'app/child.component.html'
})
export class ChildComponent {  
 @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  onClick() {
    this.notify.emit('Click from nested component');
  }
}