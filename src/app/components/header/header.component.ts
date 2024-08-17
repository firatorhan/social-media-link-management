import { Component } from '@angular/core';
import { NavItemsComponent } from "./nav-items/nav-items.component";
import { SocialLinksComponent } from "./social-links/social-links.component";
import { NavLogoComponent } from "./nav-logo/nav-logo.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavItemsComponent, SocialLinksComponent, NavLogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
