import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactPageComponent,
    HomePageComponent,
    HeaderComponent,
    AboutPageComponent,
    ProjectsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
