import { Component } from '@angular/core';
import { NavItemsComponent } from "./nav-items/nav-items.component";
import { SocialLinksComponent } from "./social-links/social-links.component";
import { NavLogoComponent } from "./nav-logo/nav-logo.component";
import { LogoutComponent } from "./logout/logout.component";
import { AuthService } from '../shared/services/auth.service';
import { CommonModule } from '@angular/common';
import { MobilMenuComponent } from "./mobil-menu/mobil-menu.component";
import { ToggleMenuDirective } from '../shared/directives/toggle-menu.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavItemsComponent, SocialLinksComponent, NavLogoComponent, LogoutComponent, CommonModule, MobilMenuComponent, ToggleMenuDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public authService: AuthService) {

  }

}
