import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the mobile menu', async () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const toggler = compiled.querySelector<HTMLButtonElement>('.navbar-toggler')!;
    const menu = compiled.querySelector('.navbar-collapse')!;

    toggler.click();
    await fixture.whenStable();
    expect(menu.classList).toContain('show');
    expect(toggler.getAttribute('aria-expanded')).toBe('true');

    compiled.querySelector<HTMLAnchorElement>('.nav-link')!.click();
    await fixture.whenStable();
    expect(menu.classList).not.toContain('show');
  });
});
