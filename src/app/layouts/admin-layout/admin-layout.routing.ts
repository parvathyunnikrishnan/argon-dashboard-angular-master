import { Routes } from '@angular/router';
import { AdminComponent } from '../../pages/admin/admin.component';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { OrdersComponent } from '../../pages/orders/orders.component';
import { OffersComponent } from '../../pages/offers/offers.component';
import { DeliveryPartnersComponent } from '../../pages/delivery-partners/delivery-partners.component';
import { CategoriesComponent } from '../../pages/categories/categories.component';
import { ChefsComponent } from '../../pages/chefs/chefs.component';
import { ConfigurationsComponent } from '../../pages/configurations/configurations.component';
import { AllergensComponent } from '../../pages/allergens/allergens.component';
import {  DietaryCategoriesComponent } from '../../pages/dietary-categories/dietary-categories.component';
import {  OrderViewComponent } from '../../pages/order-view/order-view.component';





export const AdminLayoutRoutes: Routes = [
    { path: 'admin',      component: AdminComponent },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'orders',          component: OrdersComponent },
    { path: 'offers',          component: OffersComponent },
    { path: 'chefs',   component: ChefsComponent },
    { path: 'delivery-partners',       component: DeliveryPartnersComponent },
    { path: 'configurations',           component: ConfigurationsComponent },
    { path: 'categories',           component: CategoriesComponent },
    { path: 'allergens',           component: AllergensComponent },
    { path: 'dietary-categories', component:  DietaryCategoriesComponent },
    { path: 'order-view', component:  OrderViewComponent }


];
