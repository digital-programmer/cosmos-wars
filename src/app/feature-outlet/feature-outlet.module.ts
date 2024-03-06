import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureOutletComponent } from './feature-outlet.component';
import { RouterModule, Routes } from '@angular/router';
import { HOME_ROUTE } from '../routes/feature-routes';

const routes: Routes = [
  {
    path: '',
    component: FeatureOutletComponent,
    children: [
      {
        path: HOME_ROUTE.path,
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
];

@NgModule({
  declarations: [FeatureOutletComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [FeatureOutletComponent],
})
export class FeatureOutletModule {}
