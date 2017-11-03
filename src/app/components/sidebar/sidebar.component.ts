import { Component, Input } from "@angular/core";

@Component({
    selector: "sidebar",
    templateUrl: './sidebar.html'
})
export class SideBarComponent {
    @Input() links: Array<any>;
    public sidebarOpen: boolean = false;
    public currentPage: string = '';

    public closeSideBar() {
        this.sidebarOpen = false;
    }

    public toggleSideBar() {
        this.sidebarOpen === true ? this.sidebarOpen = false : this.sidebarOpen = true;
        console.log(this.sidebarOpen);
    }
}