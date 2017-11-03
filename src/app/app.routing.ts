import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './pages/home/home.component';

export const AppRouting: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '',
        component: HomeComponent
    }
]);