import { Directive, ElementRef, NgZone, OnDestroy, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true,
})
export class RevealOnScrollDirective implements OnInit, OnDestroy {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly zone = inject(NgZone);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const nativeElement = this.element.nativeElement;
    nativeElement.classList.add('reveal');

    if (!('IntersectionObserver' in window)) {
      nativeElement.classList.add('is-visible');
      return;
    }

    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            nativeElement.classList.add('is-visible');
            this.observer?.unobserve(nativeElement);
          }
        },
        { threshold: 0.18, rootMargin: '0px 0px -72px' },
      );

      this.observer.observe(nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
