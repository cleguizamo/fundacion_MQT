import { Component } from '@angular/core';
import { navItems } from '../../core/foundation-content';

@Component({
  selector: 'app-site-header',
  standalone: true,
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.css',
})
export class SiteHeaderComponent {
  protected readonly navItems = navItems;
}
