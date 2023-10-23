import { Component, OnInit } from '@angular/core';
import { newArtist } from 'src/app/Common/factories';
import { IArtist } from 'src/app/Interfaces/IArtist';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-top-artist',
  templateUrl: './top-artist.component.html',
  styleUrls: ['./top-artist.component.scss']
})
export class TopArtistComponent implements OnInit {
  
  topArtist: IArtist = newArtist()
  
  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.searchArtist()
  }

  async searchArtist() {
    const artist = await this.spotifyService.getTopArtists(1)

    if(!!artist)
      this.topArtist = artist.pop()
  }
}
