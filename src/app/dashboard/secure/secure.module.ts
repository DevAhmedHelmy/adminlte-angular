import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureComponent } from './secure.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from '../secure/dashboard/dashboard.module';
const routes: Routes = [
  {
    path: 'dashboard',
    component: SecureComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
    ],
  },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  declarations: [SecureComponent],
  imports: [CommonModule, RouterModule.forChild(routes), DashboardModule],
})
export class SecureModule {}
