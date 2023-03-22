import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { RegisterComponent } from './components/register/register.component';
import { PortfolioeditComponent } from './components/portfolioedit/portfolioedit.component';
import { HeaderEditComponent } from './components/header-edit/header-edit.component';
import { AboutmeEditComponent } from './components/aboutme-edit/aboutme-edit.component';
import { EducationEditComponent } from './components/education-edit/education-edit.component';
import { EducationFormComponent } from './components/education-form/education-form.component';
import { EducationItemsComponent } from './components/education-items/education-items.component';
import { EducationNewComponent } from './components/education-new/education-new.component';
import { EducationSaveComponent } from './components/education-save/education-save.component';
import { ExperiencesEditComponent } from './components/experiences-edit/experiences-edit.component';
import { ExperiencesFormComponent } from './components/experiences-form/experiences-form.component';
import { ExperiencesItemsComponent } from './components/experiences-items/experiences-items.component';
import { ExperiencesNewComponent } from './components/experiences-new/experiences-new.component';
import { ExperiencesSaveComponent } from './components/experiences-save/experiences-save.component';
import { ProjectsEditComponent } from './components/projects-edit/projects-edit.component';
import { ProjectsFormComponent } from './components/projects-form/projects-form.component';
import { ProjectsItemsComponent } from './components/projects-items/projects-items.component';
import { ProjectsNewComponent } from './components/projects-new/projects-new.component';
import { ProjectsSaveComponent } from './components/projects-save/projects-save.component';
import { SkillsEditComponent } from './components/skills-edit/skills-edit.component';
import { SkillsFormComponent } from './components/skills-form/skills-form.component';
import { SkillsItemsComponent } from './components/skills-items/skills-items.component';
import { SkillsNewComponent } from './components/skills-new/skills-new.component';
import { SkillsSaveComponent } from './components/skills-save/skills-save.component';
import { HardskillsEditComponent } from './components/hardskills-edit/hardskills-edit.component';
import { HardskillsFormComponent } from './components/hardskills-form/hardskills-form.component';
import { HardskillsItemsComponent } from './components/hardskills-items/hardskills-items.component';
import { HardskillsNewComponent } from './components/hardskills-new/hardskills-new.component';
import { HardskillsSaveComponent } from './components/hardskills-save/hardskills-save.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AboutmeComponent,
    ExperiencesComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    LoginComponent,
    PortfolioComponent,
    RegisterComponent,
    PortfolioeditComponent,
    HeaderEditComponent,
    AboutmeEditComponent,
    EducationEditComponent,
    EducationFormComponent,
    EducationItemsComponent,
    EducationNewComponent,
    EducationSaveComponent,
    ExperiencesEditComponent,
    ExperiencesFormComponent,
    ExperiencesItemsComponent,
    ExperiencesNewComponent,
    ExperiencesSaveComponent,
    ProjectsEditComponent,
    ProjectsFormComponent,
    ProjectsItemsComponent,
    ProjectsNewComponent,
    ProjectsSaveComponent,
    SkillsEditComponent,
    SkillsFormComponent,
    SkillsItemsComponent,
    SkillsNewComponent,
    SkillsSaveComponent,
    HardskillsEditComponent,
    HardskillsFormComponent,
    HardskillsItemsComponent,
    HardskillsNewComponent,
    HardskillsSaveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
