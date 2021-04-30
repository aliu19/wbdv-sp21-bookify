const BOOKLISTS_URL = "http://localhost:4000/api/booklists"

export const createBookList = (bookList) => {
  return fetch(`${BOOKLISTS_URL}`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(bookList),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())
}

export const deleteBookList = (blid) => {
  fetch(`${BOOKLISTS_URL}/${blid}`, {
    method: 'DELETE',
    credentials: "include"
  })
  .then(response => response.json())
}

export const updateBookList = (blid, bookList) => {
  return fetch(`${BOOKLISTS_URL}/${id}`, {
    method: "PUT",
    credentials: "include",
    body: JSON.stringify(bookList),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(response => response.json())
}

export default {
  createBookList,
  deleteBookList,
  updateBookList
}