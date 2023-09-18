import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { PlayerRoutes } from './player.routes';
import { SidebarNavComponent } from 'src/app/components/sidebar-nav/sidebar-nav.component';

@NgModule({
  declarations: [
    PlayerComponent,
    SidebarNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PlayerRoutes)
  ]
})
export class PlayerModule { }
