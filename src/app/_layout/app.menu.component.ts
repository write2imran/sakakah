import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-menu',
    template: `
        <div class="layout-menu-container">
            <ul class="layout-menu" role="menu" (keydown)="onKeydown($event)">
                <li app-menu class="layout-menuitem-category" *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true" role="none">
                    <div class="layout-menuitem-root-text" [attr.aria-label]="item.label">{{item.label}}</div>
                    <ul role="menu">
                        <li app-menuitem *ngFor="let child of item.items" [item]="child" [index]="i" role="none"></li>
                    </ul>
                </li>
                <!-- hide primeblock link
                <a href="https://www.primefaces.org/primeblocks-ng/#/">
                    <img src="assets/layout/images/{{appMain.config.dark ? 'banner-primeblocks-dark' : 'banner-primeblocks'}}.png" alt="Prime Blocks" class="w-full mt-3"/>
                </a> -->
            </ul>
        </div>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public appMain: AppMainComponent) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Feature Module #1',
                items: [
                    { label: 'Use case 1', icon: 'pi pi-fw pi-id-card', routerLink: ['/fm1/uc1'] },
                    { label: 'Use case 2', icon: 'pi pi-fw pi-check-square', routerLink: ['/fm1/uc2'] },
                    { label: 'Use case 3', icon: 'pi pi-fw pi-bookmark', routerLink: ['/fm1/uc3'] },

                ]
            },
            {
                label: 'Feature Module #2',
                items: [
                    { label: 'Use case 1', icon: 'pi pi-fw pi-id-card', routerLink: ['/fm1/uc1'] },
                    { label: 'Use case 2', icon: 'pi pi-fw pi-check-square', routerLink: ['/fm1/uc2'] },
                    { label: 'Use case 3', icon: 'pi pi-fw pi-bookmark', routerLink: ['/fm1/uc3'] },

                ]
            },
            {
                label: 'Feature Module #3',
                items: [
                    { label: 'Use case 1', icon: 'pi pi-fw pi-id-card', routerLink: ['/fm1/uc1'] },
                    { label: 'Use case 2', icon: 'pi pi-fw pi-check-square', routerLink: ['/fm1/uc2'] },
                    { label: 'Use case 3', icon: 'pi pi-fw pi-bookmark', routerLink: ['/fm1/uc3'] },

                ]
            },
            {
                label: 'Feature Module #4',
                items: [
                    { label: 'Use case 1', icon: 'pi pi-fw pi-id-card', routerLink: ['/fm1/uc1'] },
                    { label: 'Use case 2', icon: 'pi pi-fw pi-check-square', routerLink: ['/fm1/uc2'] },
                    { label: 'Use case 3', icon: 'pi pi-fw pi-bookmark', routerLink: ['/fm1/uc3'] },

                ]
            },
            {
                label: 'Nested Links',
                items: [
                    {
                        label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
                                ]
                            },
                        ]
                    }
                ]
            }
        ];
    }

    onKeydown(event: KeyboardEvent) {
        const nodeElement = (<HTMLDivElement>event.target);
        if (event.code === 'Enter' || event.code === 'Space') {
            nodeElement.click();
            event.preventDefault();
        }
    }
}
