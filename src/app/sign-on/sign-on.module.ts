import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignOnPageRoutingModule } from './sign-on-routing.module';

import { SignOnPage } from './sign-on.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignOnPageRoutingModule
  ],
  declarations: [SignOnPage]
})
export class SignOnPageModule {}
