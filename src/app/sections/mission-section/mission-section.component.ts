import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../core/reveal-on-scroll.directive';

@Component({
  selector: 'app-mission-section',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './mission-section.component.html',
  styleUrl: './mission-section.component.css',
})
export class MissionSectionComponent {}
