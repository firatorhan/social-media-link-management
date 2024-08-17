import { Component } from '@angular/core';
import { SearchLinkComponent } from "./search-link/search-link.component";
import { AddLinkComponent } from "./add-link/add-link.component";
import { ListLinkComponent } from "./list-link/list-link.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SearchLinkComponent, AddLinkComponent, ListLinkComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
