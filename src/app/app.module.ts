import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppRouting } from './app.routing';

import { HomePage } from './pages/home/home.component';
import { WorkPage } from './pages/work/work.component';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/sidebar/sidebar.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRouting
    ],
    declarations: [
        AppComponent,
        HomePage,
        WorkPage,
        HeaderComponent,
        FooterComponent,
        SideBarComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}