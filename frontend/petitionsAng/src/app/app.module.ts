import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';
import { PetitionsComponent } from './petitions/petitions.component';
import { LoginComponent } from './login/login.component';
import { PetitionComponent } from './petition/petition.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    Error404Component,
    PetitionsComponent,
    LoginComponent,
    PetitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
