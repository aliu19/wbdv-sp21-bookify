const GOOGLE_URL = "https://www.googleapis.com/books/v1"
const API_KEY = "AIzaSyB8VPa-s7uzeEYBPVLi2yQ_4EQOh9YR-d4"

export const findBookByTitle = (title) => {
  return fetch(`${GOOGLE_URL}/volumes?q=${title}&key=${API_KEY}`)
  .then(response => response.json())
}

export const findBookById = (vid, lite) => {
  return fetch(`${GOOGLE_URL}/volumes/${vid}?key=${API_KEY}${lite ? '&projection=lite' : ''}`)
  .then(response => response.json())
}

export default {
  findBookByTitle,
  findBookById
}