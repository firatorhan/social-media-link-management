import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ILinkItem } from '../main.interface';
import { CommonModule } from '@angular/common';
import { DataService } from '../../shared/services/data.service';
import { HighlightDirective } from '../../shared/directives/highlight.directive';

@Component({
  selector: 'app-list-link',
  standalone: true,
  imports: [CommonModule, HighlightDirective],
  templateUrl: './list-link.component.html',
  styleUrl: './list-link.component.scss',
})
export class ListLinkComponent implements OnInit {
  listItems: ILinkItem[] = [];
  @Output() editLinkEmitter: EventEmitter<ILinkItem> =
    new EventEmitter<ILinkItem>();

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.currentData.subscribe((data) => {
      this.listItems = data;
    });
  }

  deleteLink(id: number) {
    this.dataService.removeData(id);
  }

  editLink(link: ILinkItem) {
    this.editLinkEmitter.emit(link);
  }
}
