import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/landing-page/landing-page').then(m => m.LandingPage)
    },
    // Ejemplo de rutas adicionales:
    // {
    //     path: 'about',
    //     loadComponent: () => import('./components/about/about').then(m => m.AboutComponent)
    // },
    // {
    //     path: 'contact',
    //     loadComponent: () => import('./components/contact/contact').then(m => m.ContactComponent)
    // },
    // Ruta wildcard para 404 (debe ir al final)
    // {
    //     path: '**',
    //     redirectTo: ''
    // }
];
