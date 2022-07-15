import { AppState } from './app.state';
import { AppConfig } from './../api/appconfig';
import { createAction, props } from "@ngrx/store";


export const appConfigChange = createAction(
    "[AppConfig ] Change",
    props<{ appState: AppState }>()
);

export const appConfigLoading = createAction("[AppConfig ] Loading ",
    props<{ appState: AppState }>()
);