import { IPlaylist } from "../Interfaces/IPlaylist";
import { IUSer } from "../Interfaces/IUser";

export function SpotifyUserMap(user: SpotifyApi.CurrentUsersProfileResponse): IUSer {
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