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

    public gotoContent() {
		//$anchorScroll('container');
	};
    
    private fillInLinks(): Array<any> {
        return [
            {url: '', value: 'About'},
            {url: 'work', value: 'Work'}
        ];    
    }
}