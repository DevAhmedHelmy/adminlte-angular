import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'dashboard',
    component: SecureComponent,
    children: [],
  },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  declarations: [SecureComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SecureModule {}
