import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  items: { tech: string }[]

  constructor() {
    this.items = [
      { tech: "HTML" }, { tech: "TypeScript" }, { tech: "CSS/SCSS" }, { tech: "JavaScript" },
      { tech: "SQL" }, { tech: "Angular 8+" }, { tech: "Cypress" }, { tech: "Auth0" }, { tech: "MS Azure DevOps" },
      { tech: "TeamCity" }, { tech: "Material UI" }, { tech: "Cypress" }, { tech: "NestJS" }, { tech: "NodeJS" },
      { tech: "GraphQL" }, { tech: "MobX" }
    ]
  }
}
