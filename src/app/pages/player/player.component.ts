import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit{
  
  showPageContent = false

  constructor(private router: Router, private spotifyService: SpotifyService) { }

  async ngOnInit() {
    await this.checkAuth()
  }

  async checkAuth() {
    const token = localStorage.getItem('token')

    if(!token) {
      this.userNotAuthenticated()
      return;
    }

    const userCreated = await this.spotifyService.buildUser()

    if(userCreated)
      this.showPageContent = true
    else {
      this.userNotAuthenticated()
      this.showPageContent = false
    }
  }

  userNotAuthenticated() {
    localStorage.clear()
    this.showPageContent = false
    this.router.navigate(['/login'])
  }
}
