import { appConfigLoading } from './store/app.actions';
import { AppState } from './store/app.state';
import { selectAppConfig } from './store/app.selectors';
import { environment } from 'src/environments/environment';
import { AppConfig } from './api/appconfig';
import { ConfigService } from 'src/app/service/app.config.service';
import { AppConfigComponent } from './_layout/app.config.component';
import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { EMPTY, Observable, of } from 'rxjs';
import { select, Store } from '@ngrx/store';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    menuMode = 'static';
    config$: Observable<AppState> = this.store.pipe(select(selectAppConfig));

    constructor(private primengConfig: PrimeNGConfig,
        public configService: ConfigService,
        private store: Store) { }

    ngOnInit() {

        this.primengConfig.ripple = true;
        document.documentElement.style.fontSize = '14px';

        this.config$.subscribe(appState => {

            let themeElement = document.getElementById('theme-css');
            themeElement.setAttribute('href', 'assets/theme/' + appState.appConfig.theme + '/theme.css');

        });
        this.store.dispatch(appConfigLoading({ appState: { appConfig: this.configService.config } }));
    }
}
