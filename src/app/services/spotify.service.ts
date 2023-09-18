import { Injectable } from '@angular/core';
import { SpotifyConfig } from 'src/environments/environment';
import Spotify from 'spotify-web-api-js'
import { IUSer } from '../Interfaces/IUser';
import { SpotifyUserToIUser } from '../Common/spotifyHelper';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotifyApi: Spotify.SpotifyWebApiJs = null
  user: IUSer

  constructor() {
    this.spotifyApi = new Spotify()
  }

  async buildUser() {
    if(!!this.user)
      return true

    const token = localStorage.getItem('token')

    if(!token) 
      return false

    try {
      this.setAccessToken(token)
      await this.getSpotifyUser()
      return !!this.user
    } catch(ex) {
      return false
    }
  }

  async getSpotifyUser() {
    const userData = await this.spotifyApi.getMe()
    this.user = SpotifyUserToIUser(userData)
  }

  getLoginUrl() {
    const authEndpoint = `${SpotifyConfig.authEndpoint}?`
    const clientId = `client_id=${SpotifyConfig.clientId}&`
    const redirectUrl = `redirect_uri=${SpotifyConfig.redirectUrl}&`
    const scopes = `scope=${SpotifyConfig.scopes.join('%20')}&`
    const responseType = 'response_type=token&show_dialog=true'

    return authEndpoint + clientId + redirectUrl + scopes + responseType
  }

  getTokenUrlCallback() {
    if(!window.location.hash)
      return ''

    const params = window.location.hash.substring(1).split('&')
    return params[0].split('=')[1]
  }

  setAccessToken(token: string) {
    this.spotifyApi.setAccessToken(token)
    localStorage.setItem('token', token)
  }
}
