import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortfolioeditComponent } from './components/portfolioedit/portfolioedit.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:'', redirectTo: 'portfolio', pathMatch:'full'},
  {path:'portfolio', component: PortfolioComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'portfolioedit', component:PortfolioeditComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/login']))},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
