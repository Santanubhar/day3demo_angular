import {Component} from '@angular/core';
import { Login } from './Login';

@Component({
    selector: 'login',
    templateUrl: 'app/login/login.component.html'
})
export class LoginComponent {
    
    valid: boolean = true;
    
    login = new Login();
    
    onSubmit() {
        if (this.login.userName === "admin" && this.login.password === "admin")
        {
            this.valid = true;
            alert("Login Successful");
        }
        else
            this.valid = false;
    }
}
