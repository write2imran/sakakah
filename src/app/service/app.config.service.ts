import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppConfig } from '../api/appconfig';

@Injectable()
export class ConfigService {

    config: AppConfig = {
        theme: environment.defaultTheme,
        dark: environment.isDark,
        inputStyle: 'outlined',
        ripple: true
    };
}
