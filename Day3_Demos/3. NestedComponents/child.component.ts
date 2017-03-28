import { Component} from '@angular/core';

@Component({
  selector: 'child-selector',
  templateUrl: 'app/child.component.html'
})
export class ChildComponent {  
  title = 'I\'m a nested component';
}