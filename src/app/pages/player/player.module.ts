import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { PlayerRoutes } from './player.routes';
import { SidebarNavComponent } from 'src/app/components/sidebar-nav/sidebar-nav.component';
import { MenuButtonComponent } from 'src/app/components/menu-button/menu-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    PlayerComponent,
    SidebarNavComponent,
    MenuButtonComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild(PlayerRoutes)
  ]
})
export class PlayerModule { }
