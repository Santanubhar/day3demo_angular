import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    styleUrls: ['app/parent.component.css'],
    template: `
        <div class="highlight">
            Demo for component external styling
        </div>
        <my-child></my-child>
    `
})
export class ParentComponent { }

 