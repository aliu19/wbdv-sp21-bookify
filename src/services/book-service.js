const GOOGLE_URL = "https://www.googleapis.com/books/v1"
const API_KEY = "AIzaSyAumP1Va6HRrKE0q2Unsn9jhevOcjB6GPk"

export const findBookByTitle = (title) => {
  return fetch(`${GOOGLE_URL}/volumes?q=${title}&key=${API_KEY}`)
  .then(response => response.json())
}

export const findBookById = (vid) => {
  return fetch(`${GOOGLE_URL}/volumes/${vid}?key=${API_KEY}`)
  .then(response => response.json())
}

export default {
  findBookByTitle,
  findBookById
}