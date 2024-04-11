import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  {
    title: 'title',
    path: '',
    loadComponent: ()=> import('./pages/home/home.component').then(m =>m.HomeComponent)
  },
  {
    title: 'login',
    path: 'login',
    component: LoginComponent
  },
  {
    title: 'profile',
    path: 'profile',
    component: ProfileComponent
  },
  {
    title: 'register',
    path: 'register',
    component: RegisterComponent
  },
  {
    path:'**',
    redirectTo: '',
    pathMatch:'full'
  }
];
