import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure.component';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbComponent } from './components/layouts/breadcrumb/breadcrumb.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { SidebarComponent } from './components/layouts/sidebar/sidebar.component';
import { HomeComponent } from './components/pages/home/home.component';
const routes: Routes = [
  {
    path: 'dashboard',
    component: SecureComponent,
    children: [],
  },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    SecureComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    BreadcrumbComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SecureModule {}
