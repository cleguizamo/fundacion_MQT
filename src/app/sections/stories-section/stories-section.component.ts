import { Component } from '@angular/core';
import { stories } from '../../core/foundation-content';
import { RevealOnScrollDirective } from '../../core/reveal-on-scroll.directive';

@Component({
  selector: 'app-stories-section',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './stories-section.component.html',
  styleUrl: './stories-section.component.css',
})
export class StoriesSectionComponent {
  protected readonly stories = stories;
}
