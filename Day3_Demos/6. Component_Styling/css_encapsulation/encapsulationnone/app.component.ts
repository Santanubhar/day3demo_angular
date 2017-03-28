import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls:['styles.css'],
  template: `
    <h3>CSS Encapsulation with Angular 2</h3>
    <div class="cmp">
      App Component
      <first-cmp></first-cmp>
      <second-cmp></second-cmp>
    </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent { }

