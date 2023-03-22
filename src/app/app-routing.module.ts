import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortfolioeditComponent } from './components/portfolioedit/portfolioedit.component';
import { RegisterComponent } from './components/register/register.component';
import { EducationSaveComponent } from './components/education-save/education-save.component';
import { EducationEditComponent } from './components/education-edit/education-edit.component';
import { ExperiencesSaveComponent } from './components/experiences-save/experiences-save.component';
import { ExperiencesEditComponent } from './components/experiences-edit/experiences-edit.component';
import { ProjectsSaveComponent } from './components/projects-save/projects-save.component';
import { ProjectsEditComponent } from './components/projects-edit/projects-edit.component';
import { SkillsSaveComponent } from './components/skills-save/skills-save.component';
import { SkillsEditComponent } from './components/skills-edit/skills-edit.component';
import { HardskillsSaveComponent } from './components/hardskills-save/hardskills-save.component';
import { HardskillsEditComponent } from './components/hardskills-edit/hardskills-edit.component';

const routes: Routes = [
  {path:'', redirectTo: 'portfolio', pathMatch:'full'},
  {path:'portfolio', component: PortfolioComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'portfolioedit', component:PortfolioeditComponent,...canActivate(() => redirectUnauthorizedTo(['/login']))},
  {path:'portfolio/educacionsave', component: EducationSaveComponent,...canActivate(() => redirectUnauthorizedTo(['/login']))},
  {path:'portfolio/educacionedit/:id', component: EducationEditComponent,...canActivate(() => redirectUnauthorizedTo(['/login']))},
  {path:'portfolio/experienciasave', component: ExperiencesSaveComponent,...canActivate(() => redirectUnauthorizedTo(['/login']))},
  {path:'portfolio/experienciaedit/:id', component: ExperiencesEditComponent,...canActivate(() => redirectUnauthorizedTo(['/login']))},
  {path:'portfolio/proyectosave', component: ProjectsSaveComponent,...canActivate(() => redirectUnauthorizedTo(['/login']))},
  {path:'portfolio/proyectoedit/:id', component: ProjectsEditComponent,...canActivate(() => redirectUnauthorizedTo(['/login']))},
  {path:'portfolio/softskillsave', component: SkillsSaveComponent,...canActivate(() => redirectUnauthorizedTo(['/login']))},
  {path:'portfolio/softskilledit/:id', component: SkillsEditComponent,...canActivate(() => redirectUnauthorizedTo(['/login']))},
  {path:'portfolio/hardskillsave', component: HardskillsSaveComponent,...canActivate(() => redirectUnauthorizedTo(['/login']))},
  {path:'portfolio/hardskilledit/:id', component: HardskillsEditComponent,...canActivate(() => redirectUnauthorizedTo(['/login']))},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
