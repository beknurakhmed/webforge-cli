import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { PostDetailComponent } from './pages/post-detail.component';
import { CategoryComponent } from './pages/category.component';
import { AboutComponent } from './pages/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post/:id', component: PostDetailComponent },
  { path: 'category/:slug', component: CategoryComponent },
  { path: 'about', component: AboutComponent },
];
