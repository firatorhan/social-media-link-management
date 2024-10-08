import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ILinkItem } from '../../main/main.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private initialItems =
    localStorage.getItem('links') !== null
      ? JSON.parse(localStorage.getItem('links')!)
      : [
          {
            id: 0,
            link: 'https://firatorhan.com/',
            nameOfSocialMedia: 'Personal Website',
            description:
              "Hi 👋🏻, I'm currently working at @innova, a company that specializes in building SaaS CRM products.",
          },
          {
            id: 1,
            link: 'https://www.linkedin.com/in/firatorhan/?originalSubdomain=tr',
            nameOfSocialMedia: 'linkedin',
            description:
              "I'm a Frontend Developer specializing in creating impressive web applications powered by JavaScript frameworks. I have deep expertise in modern frameworks such as React, Angular, and Vue.",
          },
          {
            id: 2,
            link: 'https://github.com/firatorhan',
            nameOfSocialMedia: 'Github!',
            description: 'Front-End Developer Portfolio',
          },
          {
            id: 3,
            link: 'https://www.youtube.com/channel/UC9zhWu89h4AqolHrVspLkVw',
            nameOfSocialMedia: 'Youtube',
            description:
              'Software Development Agency Rast Mobile Information Technology Ltd.',
          },
          {
            id: 4,
            link: 'https://www.instagram.com/mobilerast/',
            nameOfSocialMedia: 'instagram	',
            description:
              "We'll help you to finish your development project successfully.",
          },
          {
            id: 5,
            link: 'https://www.linkedin.com/company/rastmobile/?originalSubdomain=tr',
            nameOfSocialMedia: 'linkedin',
            description:
              'Hire vetted developers from Rast Mobile to scale up your tech projects.',
          },
          {
            id: 6,
            link: 'https://www.behance.net/rastmobile',
            nameOfSocialMedia: 'behance!',
            description:
              'Software Development Agency Rast Mobile Information Technology Ltd.',
          },
          {
            id: 7,
            link: 'https://www.youtube.com/channel/UC9zhWu89h4AqolHrVspLkVw',
            nameOfSocialMedia: 'Youtube',
            description:
              'Software Development Agency Rast Mobile Information Technology Ltd.',
          },
        ];

  private dataSource = new BehaviorSubject<ILinkItem[]>(this.initialItems);
  currentData = this.dataSource.asObservable();

  constructor() {
    localStorage.setItem('links', JSON.stringify(this.initialItems));
  }

  addLink(newData: ILinkItem) {
    let currentData = this.dataSource.value;
    const index = currentData.findIndex((item) => item.id === newData.id);

    if (index !== -1) {
      const updatedData = [...currentData];
      updatedData[index] = newData;
      this.dataSource.next(updatedData);
    } else {
      this.dataSource.next([...currentData, newData]);
    }
    currentData = this.dataSource.value;

    localStorage.setItem('links', JSON.stringify(currentData));
  }
  filterLinks(input: string) {
    const currentData = JSON.parse(localStorage.getItem('links')!);
    this.dataSource.next(currentData);

    const updatedData = currentData.filter((item: ILinkItem) =>
      item.link.toLowerCase().includes(input.toLowerCase())
    );
    this.dataSource.next(updatedData);
  }
  removeData(id: number) {
    const currentData = this.dataSource.value;
    const updatedData = currentData.filter((item) => item.id !== id);
    this.dataSource.next(updatedData);
    localStorage.setItem('links', JSON.stringify(updatedData));
  }
  sortLinksByUrl(type: 'asc' | 'desc') {
    let currentData = this.dataSource.value;

    if (type === 'asc') {
      currentData.sort((a: ILinkItem, b: ILinkItem) =>
        a.link.localeCompare(b.link)
      );
    } else {
      currentData = JSON.parse(localStorage.getItem('links')!);
      this.dataSource.next(currentData);
    }
  }
  sortLinksByName(type: 'asc' | 'desc') {
    let currentData = this.dataSource.value;

    if (type === 'asc') {
      currentData.sort((a: ILinkItem, b: ILinkItem) =>
        a.nameOfSocialMedia.localeCompare(b.nameOfSocialMedia)
      );
    } else {
      currentData = JSON.parse(localStorage.getItem('links')!);
      this.dataSource.next(currentData);
    }
  }
}
