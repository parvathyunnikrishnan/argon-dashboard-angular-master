import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { AdminComponent } from '../../pages/admin/admin.component';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { OrdersComponent } from '../../pages/orders/orders.component';
import { OffersComponent } from '../../pages/offers/offers.component';

import { DeliveryPartnersComponent } from '../../pages/delivery-partners/delivery-partners.component';
import { ChefsComponent } from '../../pages/chefs/chefs.component';
import { CategoriesComponent } from '../../pages/categories/categories.component';
import { DietaryCategoriesComponent } from '../../pages/dietary-categories/dietary-categories.component';
import { ConfigurationsComponent } from '../../pages/configurations/configurations.component';
import { AllergensComponent } from '../../pages/allergens/allergens.component';
import {  OrderViewComponent } from '../../pages/order-view/order-view.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    OrdersComponent,
    OffersComponent,
    ChefsComponent,
    CategoriesComponent,
    ConfigurationsComponent,
    DeliveryPartnersComponent,
    AllergensComponent,
    DietaryCategoriesComponent,
    OrderViewComponent
  ]
})

export class AdminLayoutModule {}
