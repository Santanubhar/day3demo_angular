import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h3>CSS Encapsulation with Angular 2</h3>
    <div class="cmp">
      App Component
      <first-cmp></first-cmp>
      <second-cmp></second-cmp>
    </div>
  `
})
export class AppComponent {
  
}

