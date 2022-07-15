import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ProductService } from '../service/productservice';
import { Subscription } from 'rxjs';
import { ConfigService } from '../service/app.config.service';
import { AppConfig } from '../api/appconfig';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

    items: MenuItem[];

    constructor() { }

    ngOnInit() {
        this.items = [
            { label: 'Include', icon: 'pi pi-fw pi-plus' },
            { label: 'Exclude', icon: 'pi pi-fw pi-minus' }
        ];

    }
}
