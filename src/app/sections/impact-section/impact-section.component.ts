import { Component } from '@angular/core';
import { impactMetrics } from '../../core/foundation-content';
import { RevealOnScrollDirective } from '../../core/reveal-on-scroll.directive';

@Component({
  selector: 'app-impact-section',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './impact-section.component.html',
  styleUrl: './impact-section.component.css',
})
export class ImpactSectionComponent {
  protected readonly metrics = impactMetrics;
}
