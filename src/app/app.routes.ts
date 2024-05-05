import { Routes } from '@angular/router';
import { AngeGardienComponent } from './ange-gardien/ange-gardien.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'angegardien',
        component: AngeGardienComponent
    },
];
