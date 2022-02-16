import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { SidebarComponent } from './components/layouts/sidebar/sidebar.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { BreadcrumbComponent } from './components/layouts/breadcrumb/breadcrumb.component';
import { AuthenticationModule } from './authentication/authentication.module';

@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    AuthenticationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
