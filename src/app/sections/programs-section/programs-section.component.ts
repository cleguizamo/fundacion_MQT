import { Component } from '@angular/core';
import { programs } from '../../core/foundation-content';
import { RevealOnScrollDirective } from '../../core/reveal-on-scroll.directive';

@Component({
  selector: 'app-programs-section',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './programs-section.component.html',
  styleUrl: './programs-section.component.css',
})
export class ProgramsSectionComponent {
  protected readonly programs = programs;
}
