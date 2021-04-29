const GOOGLE_URL = "https://www.googleapis.com/books/v1"
const API_KEY = "AIzaSyDTkaO7F0Tp-CC7OgXjo88viYwUPKFvRWA"

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