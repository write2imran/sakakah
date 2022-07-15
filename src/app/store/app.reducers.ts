import { appConfigChange, appConfigLoading } from './app.actions';
import { AppConfig } from '../api/appconfig';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AppState } from './app.state';

export const initialState: AppState = {
  appConfig: {
    inputStyle: 'outlined',
    dark: environment.isDark,
    theme: environment.defaultTheme,
    ripple: true
  }
}

// export const appReducers: ActionReducerMap<AppState> = {
// };
//export const appMetaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

export const appReducers = createReducer(
  initialState,

  on(appConfigChange, (state, { appState }) => (appState)),
  on(appConfigLoading, (state, { appState }) => (appState))

);