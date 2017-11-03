import { Component, OnInit } from "@angular/core";

@Component({
    selector: "max-app",
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    public links: Array<any>;
    
    public constructor() {
        this.links = this.fillInLinks();
    }
    
    public ngOnInit(): void {}
    
    private fillInLinks(): Array<any> {
        return [
            {url: 'about', value: 'About'},
            {url: 'work', value: 'Work'},
            //{url: 'pet-projects', value: 'Pet projects'},
        ];    
    }
}