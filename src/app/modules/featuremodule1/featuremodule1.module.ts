import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Featuremodule1RoutingModule } from './featuremodule1-routing.module';
import { Featuremodule1Component } from './featuremodule1.component';
import { Usecase1Component } from './components/usecase1/usecase1.component';
import { Usecase2Component } from './components/usecase2/usecase2.component';
import { Usecase3Component } from './components/usecase3/usecase3.component';


@NgModule({
  declarations: [
    Featuremodule1Component,
    Usecase1Component,
    Usecase2Component,
    Usecase3Component
  ],
  imports: [
    CommonModule,
    Featuremodule1RoutingModule
  ]
})
export class Featuremodule1Module { }
