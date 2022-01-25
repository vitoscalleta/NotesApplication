import { Component, Input, OnInit } from '@angular/core';
import { UserRole } from '../Shared/constants/user_role';
import { NavItem } from '../Shared/Interfaces/NavItems';
import { NavBarService } from './services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() userRole: UserRole;

 public navItems: NavItem[];

  constructor(private navBarService:NavBarService) { }

  ngOnInit() {
    this.navItems = this.navBarService.getNavItems(this.userRole);
  }

}
