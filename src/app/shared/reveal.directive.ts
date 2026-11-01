import { Directive, ElementRef, OnDestroy, OnInit, inject, input } from '@angular/core';

/** Fades an element in the first time it scrolls into view. */
@Directive({
  selector: '[appReveal]',
  host: {
    class: 'reveal',
    '[style.--reveal-delay.ms]': 'appReveal() || 0'
  }
})
export class RevealDirective implements OnInit, OnDestroy {
  /** Optional stagger delay in milliseconds. */
  readonly appReveal = input<number | ''>('');

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const el = this.el.nativeElement;
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('revealed');
      return;
    }
    this.observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        el.classList.add('revealed');
        this.observer?.disconnect();
      }
    }, { threshold: 0.12 });
    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
