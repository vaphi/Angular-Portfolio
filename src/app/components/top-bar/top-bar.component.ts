import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

  @Input() viewElement: string;

  @Output() homeClick: EventEmitter<any> = new EventEmitter();
  @Output() aboutMeClick: EventEmitter<any> = new EventEmitter();
  @Output() projectsClick: EventEmitter<any> = new EventEmitter();

  homeClicked(): void {
    this.homeClick.emit(true)
  }

  aboutMeClicked(): void {
    this.aboutMeClick.emit(true)
  }

  projectsClicked(): void {
    this.projectsClick.emit(true)
  }

  getStyle(viewElement: string): any {
    switch (viewElement) {
      case "home":
        return {
          'background-image': 'linear-gradient(black, #52435e)',
          'transition': 'all 1s ease-out'
        }
      case "aboutMe":
        return {
          'background-image': 'linear-gradient(#020f16, #0a2830)',
          'transition': 'all 1s ease-out'
        }
      case "projects":
          return {
            'background-image': 'linear-gradient(#0a2830, #52435e)',
            'transition': 'all 1s ease-out'
          }
        }
    }
  }

