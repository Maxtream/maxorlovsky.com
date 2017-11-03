import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SideBarComponent } from './components/sidebar/sidebar.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRouting
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        SideBarComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}