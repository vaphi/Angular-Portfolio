import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { ContactComponent } from "./components/contact/contact.component";
import { HomeComponent } from "./components/home/home.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { TopBarComponent } from "./components/top-bar/top-bar.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    AboutMeComponent,
    ContactComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
