import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../core/reveal-on-scroll.directive';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.css',
})
export class ContactSectionComponent {}
