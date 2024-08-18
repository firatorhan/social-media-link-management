import { Component, NgModule, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-search-link',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-link.component.html',
  styleUrl: './search-link.component.scss',
})
export class SearchLinkComponent {
  filterText: string = '';
  constructor(public dataService: DataService) {}

  onFilterTextChange(newText: string) {
    this.dataService.filterLinks(newText);
  }
}
