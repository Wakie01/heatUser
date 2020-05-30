import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignOnPage } from './sign-on.page';

const routes: Routes = [
  {
    path: '',
    component: SignOnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignOnPageRoutingModule {}
