import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: '/login',
        component: LoginComponent,
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
];
@NgModule({
  declarations: [AuthenticationComponent, LoginComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AuthenticationModule {}
