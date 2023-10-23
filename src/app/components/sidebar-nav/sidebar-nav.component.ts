import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHome, faSearch, faGuitar, faMusic } from '@fortawesome/free-solid-svg-icons';
import { IPlaylist } from 'src/app/Interfaces/IPlaylist';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss']
})
export class SidebarNavComponent implements OnInit {

  selectedOption = 'Home'

  playlists: IPlaylist[] = []

  homeIcon = faHome
  searchIcon = faSearch
  artistIcon = faGuitar
  playlistIcon = faMusic

  constructor(
    private router: Router,
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.getPlaylists()
  }

  buttonClick(buttonName: string) {
    this.selectedOption = buttonName
    this.router.navigateByUrl('player/home')
  }

  async getPlaylists() {
    this.playlists = await this.spotifyService.getUsersPlaylist()
  }
}
