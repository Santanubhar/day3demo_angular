import { Component, OnInit }         from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
    selector: 'my-app',
    templateUrl: 'app/reg-form.component.html'
})
export class AppComponent implements OnInit {

    registerForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
                               firstname: ['', Validators.required],
                               lastname: ['', Validators.required],
                               address: this.formBuilder.group({
                                             street: [],
                                             zip: [],
                                             city: []
                               })
                           });
    }
}


    /*registerForm = new FormGroup({
        firstname: new FormControl(),
        lastname: new FormControl(),
        address: new FormGroup({
          street: new FormControl(),
          zip: new FormControl(),
          city: new FormControl()
        })
      });    */