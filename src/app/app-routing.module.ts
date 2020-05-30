import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'weather',
    loadChildren: () => import('./weather/weather.module').then( m => m.WeatherPageModule)
  },
  {
    path: 'customer-server',
    loadChildren: () => import('./customer-server/customer-server.module').then( m => m.CustomerServerPageModule)
  },
  {
    path: 'sign-on',
    loadChildren: () => import('./sign-on/sign-on.module').then( m => m.SignOnPageModule)
  },
  {
    path: 'forget-pass',
    loadChildren: () => import('./forget-pass/forget-pass.module').then( m => m.ForgetPassPageModule)
  },
  {
    path: 'recharge',
    loadChildren: () => import('./recharge/recharge.module').then( m => m.RechargePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
