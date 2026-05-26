import { Component } from '@angular/core';
import { ContactSectionComponent } from './sections/contact-section/contact-section.component';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { ImpactSectionComponent } from './sections/impact-section/impact-section.component';
import { InvolvementSectionComponent } from './sections/involvement-section/involvement-section.component';
import { MissionSectionComponent } from './sections/mission-section/mission-section.component';
import { ProgramsSectionComponent } from './sections/programs-section/programs-section.component';
import { StoriesSectionComponent } from './sections/stories-section/stories-section.component';
import { DocumentsSectionComponent } from './sections/documents-section/documents-section.component';
import { VisionSectionComponent } from './sections/vision-section/vision-section.component';
import { SiteHeaderComponent } from './shared/site-header/site-header.component';

@Component({
  selector: 'app-root',
  imports: [
    SiteHeaderComponent,
    HeroSectionComponent,
    MissionSectionComponent,
    VisionSectionComponent,
    ProgramsSectionComponent,
    ImpactSectionComponent,
    StoriesSectionComponent,
    DocumentsSectionComponent,
    InvolvementSectionComponent,
    ContactSectionComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
