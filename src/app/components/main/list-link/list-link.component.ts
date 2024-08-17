import { Component } from '@angular/core';
import { ILinkItem } from '../main.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-link',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-link.component.html',
  styleUrl: './list-link.component.scss',
})
export class ListLinkComponent {
  listItems: ILinkItem[];

  constructor() {
    this.listItems = [
      {
        id: 1,
        link: 'instagram.com/mobilerast/',
        nameOfSocialMedia: 'instagram	',
        description:
          "We'll help you to finish your development project successfully.",
      },
      {
        id: 2,
        link: 'tr.linkedin.com/company/rastmobile',
        nameOfSocialMedia: 'linkedin',
        description:
          'Hire vetted developers from Rast Mobile to scale up your tech projects.',
      },
      {
        id: 3,
        link: 'behance.net/rastmobile',
        nameOfSocialMedia: 'behance!',
        description:
          'Software Development Agency Rast Mobile Information Technology Ltd.',
      },
      {
        id: 4,
        link: 'twitter.com/rastmobile',
        nameOfSocialMedia: 'twitter',
        description:
          'Software Development Agency Rast Mobile Information Technology Ltd.',
      },
    ];
  }
}
