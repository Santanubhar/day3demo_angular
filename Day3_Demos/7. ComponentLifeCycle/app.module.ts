import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {ParentComponent} from './parent.component';
import {ChildComponent} from './child.component';

@NgModule({
  imports:      [BrowserModule, FormsModule],
  declarations: [ParentComponent,ChildComponent],
  bootstrap:    [ParentComponent]     
})
export class AppModule { }
