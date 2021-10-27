import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  @ViewChild('home', { static: false }) home: Component;
  @ViewChild('aboutMe', { static: false }) aboutMe: ElementRef;
  @ViewChild('projects', { static: false }) projects: ElementRef;

  homeClicked(event: any): void {
    const element = document.getElementById("homeComponent");
    element.scrollIntoView({ behavior: "smooth", block: "start"});
  }

  aboutMeClicked(event: any): void {
    const element = document.getElementById("aboutMeComponent");
    element.scrollIntoView({ behavior: "smooth", block: "start"});
  }

  projectsClicked(event: any): void {
    const element = document.getElementById("projectsComponent");
    element.scrollIntoView({ behavior: "smooth", block: "start"});
  }
}
