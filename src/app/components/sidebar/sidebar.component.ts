import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/admin', title: 'Admin',  icon: 'ni-single-02 text-yellow', class: '' },
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/orders', title: 'Orders',  icon:'ni-basket text-blue', class: '' },
    { path: '/offers', title: 'Offers',  icon:'ni-tag text-orange', class: '' },
    { path: '/chefs', title: 'Chefs',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/delivery-partners', title: 'Delivery Partners',  icon:'ni-delivery-fast text-red', class: '' },
    { path: '/categories', title: 'Categories',  icon:'ni-bullet-list-67 text-info', class: '' },
    { path: '/dietary-categories', title: 'Dietary Categories',  icon:'ni-ui-04 text-pink', class: '' },
    { path: '/allergens', title: 'Allergens',  icon:'ni-ui-04 text-red', class: '' },
    { path: '/configurations', title: 'Configurations',  icon:'ni-atom text-orange', class: '' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
