import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { PlayerRoutes } from './player.routes';
import { SidebarNavComponent } from 'src/app/components/sidebar-nav/sidebar-nav.component';
import { MenuButtonComponent } from 'src/app/components/menu-button/menu-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserFooterComponent } from 'src/app/components/user-footer/user-footer.component';
import { HomeComponent } from '../home/home.component';
import { TopArtistComponent } from 'src/app/components/top-artist/top-artist.component';

@NgModule({
  declarations: [
    PlayerComponent,
    SidebarNavComponent,
    MenuButtonComponent,
    UserFooterComponent,
    HomeComponent,
    TopArtistComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild(PlayerRoutes)
  ]
})
export class PlayerModule { }
