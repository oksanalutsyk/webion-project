import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutPageComponent } from './components/about-page/about-page.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NewsPageComponent } from './components/news-page/news-page.component';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { ServicesPageComponent } from './components/services-page/services-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'project', component: ProjectPageComponent },
  { path: 'news', component: NewsPageComponent },
  { path: 'contacts', component: ContactsPageComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
