const findSpotifyToken = () => {
  return fetch("http://localhost:4000/spotify/token")
  .then(response => response.text())
}

export const findSongByTitle = (title) => {
  return findSpotifyToken()
  .then(token => {
    return fetch(`https://api.spotify.com/v1/search?q=${title}&type=track&market=US&limit=1`, {
      headers: {
        'Authorization': "Bearer " + token.toString()
      }
    })
    .then(response => response.json())
  })
}

export default {
  findSongByTitle
}