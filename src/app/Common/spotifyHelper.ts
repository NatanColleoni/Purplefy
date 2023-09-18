import { IUSer } from "../Interfaces/IUser";

export function SpotifyUserToIUser(user: SpotifyApi.CurrentUsersProfileResponse): IUSer {
  return {
    id: user.id,
    name: user.display_name,
    urlImage: user.images.pop().url
  }
}