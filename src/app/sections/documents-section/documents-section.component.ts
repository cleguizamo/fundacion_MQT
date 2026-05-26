import { Component } from '@angular/core';
import { documents } from '../../core/foundation-content';
import { RevealOnScrollDirective } from '../../core/reveal-on-scroll.directive';

@Component({
  selector: 'app-documents-section',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './documents-section.component.html',
  styleUrl: './documents-section.component.css',
})
export class DocumentsSectionComponent {
  protected readonly documents = documents;
}
