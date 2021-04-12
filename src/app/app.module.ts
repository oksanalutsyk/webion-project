import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ServicesPageComponent } from './components/services-page/services-page.component';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { NewsPageComponent } from './components/news-page/news-page.component';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { CarouselComponent } from './components/home-page/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    AboutPageComponent,
    ServicesPageComponent,
    ProjectPageComponent,
    NewsPageComponent,
    ContactsPageComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
