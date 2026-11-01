import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/reveal.directive';
import { CATEGORIES, FACTS, FEATURES, GALLERY, POSTS, SIGNUP_HREF, SOCIALS } from '../../shared/site-content';

@Component({
  selector: 'app-home',
  imports: [RouterLink, DatePipe, RevealDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly facts = FACTS;
  readonly features = FEATURES;
  readonly categories = CATEGORIES;
  readonly posts = POSTS;
  readonly socials = SOCIALS;
  readonly signupHref = SIGNUP_HREF;
  readonly pool = GALLERY.slice(2, 10);
}
