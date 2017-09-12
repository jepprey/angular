import { CoursesService } from './courses.service';
// Components are pascal case and use suffix Component as naming convention
// Needs to be exported
import { Component } from '@angular/core'
// Need to import decorator
@Component({
    selector: 'courses', // <courses>
    // template: '<h2>{{ "Title:" + title }}</h2><h3>{{getTitle()}}</h3>'
    // use double curly braces {{}} to render dynamically; data binding
    // string Interpolation: better for text (headers, paragraphs, divs, span)
    // property binding syntax in square brackets
    // property binding only works one way, from component to the DOM, changes in DOM not reflected in component    
    // attribute property; DOM vs HTML: [attr.colspan] [textContent]
    template: `
        <h2>{{ title }}</h2>
        <h2 [textContent]="title"></h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li> 
        </ul>
        <table>
            <tr>
                <td></td>
            </tr>
        </table>
        <button class="btn btn-primary">Save</button>
    `
    // use angular building block called Directive; used to manipulate the DOM
    // prefix Directive that modifies the DOM with asterisk *
})
export class CoursesComponent{
    title = "List of courses";
    getTitle() {
        return this.title;
    }
    coursesOld = ["course1","course2","course3"]; 
    // In real world call HTTP Service to get objects from HTTP Endpoint
    // Don't tightly couple Component to HTTP Endpoint
    courses;

    // Tightly coupled
    // constructor() {
    //     let service = new CoursesService(); // Problem: tightly coupled by creating instance of service with component
    //     this.courses = service.getCourses();
    // }

//Dependency Injection
    // Decoupled courses component with courses component
    // Injecting or providing dependencies of a class into its constructor
    constructor(service: CoursesService) {         
        this.courses = service.getCourses();
    }
}