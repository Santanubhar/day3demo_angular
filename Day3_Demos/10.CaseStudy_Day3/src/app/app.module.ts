import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './products/product-list.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {OrderByPipe} from './products/orderby.pipe';
import { RatingComponent } from './products/rating.component';

@NgModule({
  imports:      [BrowserModule, FormsModule],
  declarations: [LoginComponent, WelcomeComponent, ProductListComponent,  OrderByPipe,RatingComponent],
  bootstrap:    [ProductListComponent]      
})
export class AppModule { }
