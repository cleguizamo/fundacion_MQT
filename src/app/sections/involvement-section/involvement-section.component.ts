import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../core/reveal-on-scroll.directive';

@Component({
  selector: 'app-involvement-section',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './involvement-section.component.html',
  styleUrl: './involvement-section.component.css',
})
export class InvolvementSectionComponent {}
