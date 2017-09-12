import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule
  ],
  // Singleton Pattern
  // Angular creates a single instance of the service class for the entire module
  // In the memory, only a single instance of a given object exists
  providers: [  //Here register all dependencies of components in this module
    CoursesService
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
