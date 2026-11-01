import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map } from 'rxjs';
import { NAV_LINKS, SIGNUP_HREF } from '../../shared/site-content';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  host: {
    '(window:scroll)': 'onScroll()'
  }
})
export class NavbarComponent {
  private readonly router = inject(Router);

  readonly links = NAV_LINKS;
  readonly signupHref = SIGNUP_HREF;

  readonly open = signal(false);
  private readonly scrolled = signal(false);
  private readonly onHome = toSignal(
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(event => event.urlAfterRedirects.split(/[?#]/)[0] === '/')
    ),
    { initialValue: true }
  );

  /** Transparent over the home hero; solid once scrolled, on other pages, or with the menu open. */
  readonly solid = computed(() => this.scrolled() || !this.onHome() || this.open());

  onScroll(): void {
    this.scrolled.set(window.scrollY > 40);
  }

  toggle(): void {
    this.open.update(open => !open);
  }

  close(): void {
    this.open.set(false);
  }
}
