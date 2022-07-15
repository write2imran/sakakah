import { createFeatureSelector } from "@ngrx/store";
import { AppState } from "./app.state";


export const selectAppConfig = createFeatureSelector<AppState>('appReducers');