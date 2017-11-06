import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomePage } from './pages/home/home.component';
import { WorkPage } from './pages/work/work.component';

export const AppRouting: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '',
        component: HomePage
    },
    {
        path: 'work',
        component: WorkPage
    }
]);