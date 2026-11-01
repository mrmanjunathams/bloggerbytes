import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTACT_EMAIL, NAV_LINKS, SIGNUP_HREF, SOCIALS, TAGS } from '../../shared/site-content';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
  readonly links = NAV_LINKS;
  readonly socials = SOCIALS;
  readonly tags = TAGS;
  readonly email = CONTACT_EMAIL;
  readonly signupHref = SIGNUP_HREF;
}
