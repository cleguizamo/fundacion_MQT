import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../core/reveal-on-scroll.directive';

@Component({
  selector: 'app-vision-section',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './vision-section.component.html',
  styleUrl: './vision-section.component.css',
})
export class VisionSectionComponent {}
