import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  currTopBar: string = "home";
  view: { home: boolean, aboutMe: boolean, projects: boolean; }

  @ViewChild('home', { static: false }) home: Component;
  @ViewChild('aboutMe', { static: false }) aboutMe: ElementRef;
  @ViewChild('projects', { static: false }) projects: ElementRef;

  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView() {
    if (this.home || this.aboutMe || this.projects) {

      const element1 = document.getElementById("homeComponent");
      const element2 = document.getElementById("aboutMeComponent");
      const element3 = document.getElementById("projectsComponent");
      const rect1 = element1.getBoundingClientRect();
      const rect2 = element2.getBoundingClientRect();
      const rect3 = element3.getBoundingClientRect();

      const topShown1 = rect1.top >= 0;
      const topShown2 = rect2.top >= 0;
      const topShown3 = rect3.top >= 0;

      if (topShown1) {
        this.view.home = true;
        this.view.aboutMe = false;
        this.view.projects = false;
      } else if (topShown2) {
        this.view.home = false;
        this.view.aboutMe = true;
        this.view.projects = false;
      } else if (topShown3) {
        this.view.home = false;
        this.view.aboutMe = false;
        this.view.projects = true;
      }

      Object.keys(this.view).forEach(key => {
        if (this.view[key] === true) {
          this.currTopBar = key;
        }
      })
    }
  }

  constructor() {
    this.view = { home: true, aboutMe: false, projects: false }
  }

  homeClicked(event: any): void {
    const element = document.getElementById("homeComponent");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  aboutMeClicked(event: any): void {
    const element = document.getElementById("aboutMeComponent");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  projectsClicked(event: any): void {
    const element = document.getElementById("projectsComponent");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  inViewport(): boolean {
    const element = document.getElementById("homeComponent");
    const element2 = document.getElementById("aboutMeComponent");
    const element3 = document.getElementById("projectsComponent");

    const rect = element2.getBoundingClientRect();

    return rect.top >= 0;
  }
}
