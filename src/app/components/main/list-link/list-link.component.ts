import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ILinkItem } from '../main.interface';
import { CommonModule } from '@angular/common';
import { DataService } from '../../shared/services/data.service';
import { HighlightDirective } from '../../shared/directives/highlight.directive';
import { UppercasePipe } from '../../shared/pipes/uppercase.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-link',
  standalone: true,
  imports: [CommonModule, HighlightDirective, UppercasePipe, NgxPaginationModule, FormsModule],
  templateUrl: './list-link.component.html',
  styleUrl: './list-link.component.scss',
})
export class ListLinkComponent implements OnInit {
  listItems: ILinkItem[] = [];
  defaultUrl = true;
  defaultName = true;
  currentPage = 1;
  itemsPerPage = 4

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
  sortLinksByUrl(type: 'asc' | 'desc') {
    this.defaultUrl = !this.defaultUrl
    this.dataService.sortLinksByUrl(type);
  }
  sortLinksByName(type: 'asc' | 'desc') {
    this.defaultName = !this.defaultName
    this.dataService.sortLinksByName(type);
  }
  
}
