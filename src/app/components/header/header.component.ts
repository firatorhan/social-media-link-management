import { Component } from '@angular/core';
import { NavItemsComponent } from "./nav-items/nav-items.component";
import { SocialLinksComponent } from "./social-links/social-links.component";
import { NavLogoComponent } from "./nav-logo/nav-logo.component";
import { LogoutComponent } from "./logout/logout.component";
import { AuthService } from '../shared/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavItemsComponent, SocialLinksComponent, NavLogoComponent, LogoutComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public authService: AuthService) {

  }

}
