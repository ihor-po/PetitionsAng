import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetitionsComponent } from './petitions/petitions.component';
import { LoginComponent } from './login/login.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
    {path: '', component: PetitionsComponent},
    {path: 'login', component: LoginComponent, pathMatch: 'full'},
    {path: '**', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
