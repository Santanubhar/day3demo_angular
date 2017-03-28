import { Component } from '@angular/core';

@Component({
   selector: 'my-app',
   template: '<p> Total price of product is {{ price | currency:INR | lowercase }}</p>'
})
export class AppComponent
{
        price: number = 100.1234;
}






