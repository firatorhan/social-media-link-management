import { Component } from '@angular/core';
import { INavSocialLinks } from '../header.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.scss',
})
export class SocialLinksComponent {
  socialLinks: INavSocialLinks[];

  constructor() {
    this.socialLinks = [
      {
        id: 1,
        name: 'Youtube',
        alt: 'rast mobile - youtube logo',
        src: 'assets/social-icons/youtube.svg',
        link: 'https://www.youtube.com/channel/UC9zhWu89h4AqolHrVspLkVw',
      },
      {
        id: 3,
        name: 'Instagram',
        alt: 'rast mobile - Instagram logo',
        src: 'assets/social-icons/instagram.svg',
        link: 'https://www.instagram.com/mobilerast/',
      },
      {
        id: 4,
        name: 'Behance',
        alt: 'rast mobile - Behance logo',
        src: 'assets/social-icons/behance.svg',
        link: 'https://www.behance.net/rastmobile',
      },
      {
        id: 5,
        name: 'Linkedin',
        alt: 'rast mobile - Linkedin logo',
        src: 'assets/social-icons/linkedin.svg',
        link: 'https://www.linkedin.com/company/rastmobile/?originalSubdomain=tr',
      },
    ];
  }
}
