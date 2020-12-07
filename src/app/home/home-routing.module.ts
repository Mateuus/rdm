import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
        {
            path: "devices",
            children: [
              {
                path: '',
                loadChildren: () => import('../devices/devices.module').then( m => m.DevicesPageModule)
              }
            ]
        },
        {
          path: "maps",
          children: [
            {
              path: '',
              loadChildren: () => import('../maps/maps.module').then( m => m.MapsPageModule)
            }
          ]
         },
         {
              path: "account",
              children: [
                {
                  path: '',
                  loadChildren: () => import('../account/account.module').then( m => m.AccountPageModule)
                }
            ]
         },
        {
              path: '',
              redirectTo: '/tabs/maps',
              pathMatch: 'full'
        },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/maps',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
