import { Component, OnInit } from '@angular/core';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { IUser } from 'src/app/Interfaces/IUser';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-user-footer',
  templateUrl: './user-footer.component.html',
  styleUrls: ['./user-footer.component.scss']
})
export class UserFooterComponent implements OnInit{

  leaveIcon = faArrowRightFromBracket
  user: IUser = null

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.user = this.spotifyService.user
  }
}
