import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ILinkItem } from '../../main/main.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private initialItems = [
    {
      id: 0,
      link: 'https://www.instagram.com/mobilerast/',
      nameOfSocialMedia: 'instagram	',
      description:
        "We'll help you to finish your development project successfully.",
    },
    {
      id: 1,
      link: 'https://www.linkedin.com/company/rastmobile/?originalSubdomain=tr',
      nameOfSocialMedia: 'linkedin',
      description:
        'Hire vetted developers from Rast Mobile to scale up your tech projects.',
    },
    {
      id: 2,
      link: 'https://www.behance.net/rastmobile',
      nameOfSocialMedia: 'behance!',
      description:
        'Software Development Agency Rast Mobile Information Technology Ltd.',
    },
    {
      id: 3,
      link: 'https://www.youtube.com/channel/UC9zhWu89h4AqolHrVspLkVw',
      nameOfSocialMedia: 'Youtube',
      description:
        'Software Development Agency Rast Mobile Information Technology Ltd.',
    },
  ];

  private dataSource = new BehaviorSubject<ILinkItem[]>(this.initialItems);
  currentData = this.dataSource.asObservable();

  constructor() {}

  addLink(newData: ILinkItem) {
    const currentData = this.dataSource.value;
    const index = currentData.findIndex((item) => item.id === newData.id);

    if (index !== -1) {
      const updatedData = [...currentData];
      updatedData[index] = newData;
      this.dataSource.next(updatedData);
    } else {
      this.dataSource.next([...currentData, newData]);
    }
  }
  removeData(id: number) {
    const currentData = this.dataSource.value;
    const updatedData = currentData.filter((item) => item.id !== id);
    this.dataSource.next(updatedData);
  }
}
