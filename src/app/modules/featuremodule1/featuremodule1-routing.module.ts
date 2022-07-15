import { Usecase3Component } from './components/usecase3/usecase3.component';
import { Usecase2Component } from './components/usecase2/usecase2.component';
import { Usecase1Component } from './components/usecase1/usecase1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Featuremodule1Component } from './featuremodule1.component';

const routes: Routes = [
  {
    path: '', component: Featuremodule1Component,
    children: [
      { path: 'uc1', component: Usecase1Component },
      { path: 'uc2', component: Usecase2Component },
      { path: 'uc3', component: Usecase3Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Featuremodule1RoutingModule { }
