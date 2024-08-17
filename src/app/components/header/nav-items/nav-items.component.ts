import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { INavItems } from '../header.interface';

@Component({
  selector: 'app-nav-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-items.component.html',
  styleUrl: './nav-items.component.scss',
})
export class NavItemsComponent {
  navItems: INavItems[];

  constructor() {
    this.navItems = [
      {
        id: 1,
        name: 'About',
        link: '/about',
      },
      {
        id: 2,
        name: 'Jury - Competition Software',
        link: '/competition-software',
      },
      {
        id: 3,
        name: 'Word Ninja',
        link: '/word-ninja',
      },
      {
        id: 4,
        name: 'Word Pyramids',
        link: '/word-pyramids',
      },
    ];
  }
}

