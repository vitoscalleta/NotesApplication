import { Injectable } from "@angular/core";
import { UserRole } from "../../Shared/constants/user_role";
import { NavItem } from '../../Shared/Interfaces/NavItems';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {

  public getNavItems(userRole: UserRole) {

    let userNavItems: NavItem[] = [
      { DisplayText: "Contact Us", Url: "/contactus" },
      { DisplayText: "About", Url: "/about" }
    ];

    if (userRole == UserRole.User) {
      return userNavItems;
    }
    if (userRole == UserRole.Admin) {
      return [
        ...userNavItems,
        { DisplayText: "Admin", Url: "/admin" }
      ];
    }

  }

}
