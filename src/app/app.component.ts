import { environment } from 'src/environments/environment';
import { AppConfig } from './api/appconfig';
import { ConfigService } from 'src/app/service/app.config.service';
import { AppConfigComponent } from './_layout/app.config.component';
import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    menuMode = 'static';
    config: AppConfig;

    constructor(private primengConfig: PrimeNGConfig, public configService: ConfigService) { }

    ngOnInit() {
        this.primengConfig.ripple = true;
        document.documentElement.style.fontSize = '14px';
        this.config = this.configService.config;
        this.defaultThemeConfig(environment.defaultTheme, environment.isDark)
    }

    defaultThemeConfig(theme: string, dark: boolean) {
        let themeElement = document.getElementById('theme-css');
        themeElement.setAttribute('href', 'assets/theme/' + environment.defaultTheme + '/theme.css');
        this.configService.updateConfig({ ...this.config, ...{ theme, dark } });

    }

}
