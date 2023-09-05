import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  items: { tech: string; level: number }[];

  constructor() {
    this.items = [
      { tech: 'HTML', level: 2 },
      { tech: 'CSS/SCSS', level: 2 },
      { tech: 'TypeScript', level: 2 },
      { tech: 'JavaScript', level: 2 },
      { tech: 'SQL', level: 2 },
      { tech: 'Angular 8+', level: 2 },
      { tech: 'Docker', level: 1 },
      { tech: 'React', level: 1 },
      { tech: 'Auth0', level: 1 },
      { tech: 'MS Azure DevOps', level: 1 },
      { tech: 'TeamCity', level: 1 },
      { tech: 'Material UI', level: 1 },
      { tech: 'Cypress', level: 1 },
      { tech: 'NestJS', level: 1 },
      { tech: 'NodeJS', level: 1 },
      { tech: 'GraphQL', level: 1 },
      { tech: 'MobX', level: 1 },
    ];
  }
}
