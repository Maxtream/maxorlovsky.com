import { Component, Input } from "@angular/core";

@Component({
    selector: "loading",
    template: '<div class="loading" *ngIf="loading"></div>'
})
export class LoadingComponent {
    @Input() loading: boolean;

    public constructor() {
       
    }

    public ngOnInit(): void {
        
    }
}