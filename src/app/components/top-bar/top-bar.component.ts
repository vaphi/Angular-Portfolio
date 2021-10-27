import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

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
}

