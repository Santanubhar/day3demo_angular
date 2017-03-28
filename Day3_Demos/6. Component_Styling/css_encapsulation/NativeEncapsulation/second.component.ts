import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'second-cmp',
  template: `<div class="cmp">Second Component</div>`,
  styles: ['.cmp { border: green 2px solid; }'],
   encapsulation: ViewEncapsulation.Native 
})
export class SecondComponent {

}

