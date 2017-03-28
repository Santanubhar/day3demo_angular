import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    styles: [`
        .highlight {
            border: 2px solid red;
            background-color:yellow;
            text-align: center;
            margin-bottom: 20px;
        }
    `],
    template: `
        <div class="highlight">
            Demo for component inline styling
        </div>
    <my-child></my-child>
    `
})
export class AppComponent { }

