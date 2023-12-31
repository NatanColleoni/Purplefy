import { IArtist } from "../Interfaces/IArtist";
import { IPlaylist } from "../Interfaces/IPlaylist";
import { IUser } from "../Interfaces/IUser";

export function SpotifyUserMap(user: SpotifyApi.CurrentUsersProfileResponse): IUser {
  return {
    id: user.id,
    name: user.display_name,
    urlImage: user.images.pop().url
  }
}

export function SpotifyPlaylistMap(playlist: SpotifyApi.PlaylistObjectSimplified) : IPlaylist {
  return {
    id: playlist.id,
    name: playlist.name,
    urlImage: playlist.images.pop().url
  }
}

export function SpotifyArtistMap(artist: SpotifyApi.ArtistObjectFull) : IArtist {
  return {
    id: artist.id,
    name: artist.name,
    urlImage: artist.images.sort((a,b) => a.width - b.width).pop().url
  }
}