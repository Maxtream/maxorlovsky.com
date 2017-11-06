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
        this.setBodyClass();
    }

    public toggleSideBar() {
        this.sidebarOpen === true ? this.sidebarOpen = false : this.sidebarOpen = true;
        this.setBodyClass();
    }

    private setBodyClass() {
        if (this.sidebarOpen) {
            document.querySelector('body').classList.add('sidebar-open');
        } else {
            document.querySelector('body').classList.remove('sidebar-open');
        }
    }
}