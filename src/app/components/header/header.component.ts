import { Component, Input } from "@angular/core";

@Component({
    selector: "header-component",
    templateUrl: './header.html'
})
export class HeaderComponent {
    @Input() links: Array<any>;

    public night: boolean = false;
    public mood: string = '';

    public constructor() {
        //Enable/disable night mood
        const hours = new Date().getHours();
        if (hours <= 7 || hours >= 20) {
            this.night = true;
        }

        const month = new Date().getMonth();
        if (month == 11 || month <= 1) {
            this.mood = 'winter';
            // BG is dark, so night always required
            this.night = true;
        }
    }

    public ngOnInit(): void {
        this.links = this.links.slice().reverse();
    }
}