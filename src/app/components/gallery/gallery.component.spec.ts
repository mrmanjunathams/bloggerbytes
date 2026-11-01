import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryComponent } from './gallery.component';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should render a tile for every photo', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.tile').length).toBe(component.photos.length);
  });

  it('should open, step through and close the lightbox', async () => {
    const compiled = fixture.nativeElement as HTMLElement;
    compiled.querySelectorAll<HTMLButtonElement>('.tile')[0].click();
    await fixture.whenStable();
    expect(compiled.querySelector('.lightbox')).toBeTruthy();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft' }));
    expect(component.active()).toBe(component.photos.length - 1);

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await fixture.whenStable();
    expect(compiled.querySelector('.lightbox')).toBeNull();
  });
});
