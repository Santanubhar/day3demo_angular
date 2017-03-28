import {Component} from '@angular/core';


@Component({
    selector: 'my-app',
    template: '<div><p>{{ message | length:true }}</p></div>'

})
export class AppComponent {
  message: string = 'Angular2';
}

