import { Component, OnInit } from "@angular/core";

@Component({
    selector: "max-app",
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    public links: Array<any>;
    public year: number;
    
    public constructor() {
        this.links = this.fillInLinks();
        this.year = new Date().getFullYear();
    }
    
    public ngOnInit(): void {}

    public gotoContent() {
		//$anchorScroll('container');
	};
    
    private fillInLinks(): Array<any> {
        return [
            {url: '', value: 'About'},
            {url: 'work', value: 'Work'},
            //{url: 'pet-projects', value: 'Pet projects'},
        ];    
    }
}