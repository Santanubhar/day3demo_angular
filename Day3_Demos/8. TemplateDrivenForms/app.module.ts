import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import { CourseFormComponent }  from './course-form.component';

@NgModule({
  imports:      [BrowserModule, FormsModule ],
  declarations: [AppComponent, CourseFormComponent],
  bootstrap:    [AppComponent]
})
export class AppModule { }
