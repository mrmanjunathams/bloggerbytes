import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Bloggerbytes — Publish your passions'
  },
  {
    path: 'gallery',
    loadComponent: () => import('./components/gallery/gallery.component').then(m => m.GalleryComponent),
    title: 'Image pool — Bloggerbytes'
  },
  { path: '**', redirectTo: '' }
];
