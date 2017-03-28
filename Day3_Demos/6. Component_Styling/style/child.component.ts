import {Component} from '@angular/core';

@Component({
    selector: 'my-child',
     styles: [`
        .highlight {
            border: 2px solid yellow;
            background-color:cyan;
            text-align: center;
            margin-bottom: 20px;
        }
    `],
    template: `
        <div class="highlight">
            Demo for component inline styling
        </div>
    `
})
export class ChildComponent { }

