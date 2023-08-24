export const environment = {
  production: true
}

export const SpotifyConfig = {
  clientId: '6a40c0e71f984d45b1c834859a12f3ef',
  authEndpoint: 'https://accounts.spotify.com/authorize',
  redirectUrl: 'http://localhost:4200/login/',
  scopes: [
    "user-read-currently-playing", //tocando agora
    "user-read-recently-played", //tocada recentemente
    "user-read-playback-state", //estado do player
    "user-top-read", //mais escutados
    "user-modify-playback-state", //mudar o estado do player
    "user-library-read", //visualizar biblioteca
    "playlist-read-private", //visualizar playlist privada
    "playlist-read-collaborative" //visualizar playlist colaborativa
  ]
}