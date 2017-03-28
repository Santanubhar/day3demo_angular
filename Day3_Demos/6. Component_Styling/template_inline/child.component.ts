import {Component} from '@angular/core';

@Component({
    selector: 'my-child',
    template: `
        <style>
            button {
                background-color: blue;
                border: 1px solid #777;
            }
        </style>
        <button>Click Me</button>
    `
})
export class ChildComponent {
  
}

