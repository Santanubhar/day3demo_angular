import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <style>
            button {
                background-color: cyan;
                border: 1px solid #777;
            }
        </style>
        <button>Click Me</button>
        <my-child></my-child>
    `
})
export class AppComponent { }

