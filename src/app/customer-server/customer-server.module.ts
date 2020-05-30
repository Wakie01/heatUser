import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerServerPageRoutingModule } from './customer-server-routing.module';

import { CustomerServerPage } from './customer-server.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerServerPageRoutingModule
  ],
  declarations: [CustomerServerPage]
})
export class CustomerServerPageModule {}
