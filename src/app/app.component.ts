import { Component, OnInit } from "@angular/core";
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
    selector: "max-app",
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    public links: Array<any>;
    public loading: boolean;
    
    public constructor(private router: Router) {
        this.links = this.fillInLinks();
        
        this.router.events.subscribe((event) => {
            this.loading = true;
            
            if (event instanceof NavigationEnd === true) {
                this.loading = false;
            }
        });
    }
    
    public ngOnInit(): void {}
    
    private fillInLinks(): Array<any> {
        return [
            {url: '', value: 'About'},
            {url: 'work', value: 'Work'}
        ];    
    }
}