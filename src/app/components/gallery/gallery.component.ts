import { Component, ElementRef, OnDestroy, afterRenderEffect, computed, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RevealDirective } from '../../shared/reveal.directive';
import { GALLERY, SIGNUP_HREF } from '../../shared/site-content';

@Component({
  selector: 'app-gallery',
  imports: [RevealDirective],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  host: {
    '(document:keydown)': 'onKey($event)'
  }
})
export class GalleryComponent implements OnDestroy {
  private readonly document = inject(DOCUMENT);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  readonly photos = GALLERY;
  readonly signupHref = SIGNUP_HREF;

  /** Index of the photo open in the lightbox, or null when closed. */
  readonly active = signal<number | null>(null);
  readonly activePhoto = computed(() => {
    const index = this.active();
    return index === null ? null : this.photos[index];
  });

  private readonly isOpen = computed(() => this.active() !== null);

  constructor() {
    // Lock page scroll and move focus into the lightbox while it is open
    afterRenderEffect(() => {
      const isOpen = this.isOpen();
      this.document.body.style.overflow = isOpen ? 'hidden' : '';
      if (isOpen) {
        this.host.nativeElement.querySelector<HTMLButtonElement>('.lb-close')?.focus();
      }
    });
  }

  ngOnDestroy(): void {
    this.document.body.style.overflow = '';
  }

  open(index: number): void {
    this.active.set(index);
  }

  close(): void {
    this.active.set(null);
  }

  step(delta: number): void {
    this.active.update(index => index === null ? null : (index + delta + this.photos.length) % this.photos.length);
  }

  onKey(event: KeyboardEvent): void {
    if (this.active() === null) {
      return;
    }
    if (event.key === 'Escape') {
      this.close();
    } else if (event.key === 'ArrowRight') {
      this.step(1);
    } else if (event.key === 'ArrowLeft') {
      this.step(-1);
    }
  }
}
