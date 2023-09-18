import { Routes } from "@angular/router";

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'player',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) //routes lazy loading
  },
  {
    path: 'player',
    loadChildren: () => import('./pages/player/player.module').then(m => m.PlayerModule)
  }
]