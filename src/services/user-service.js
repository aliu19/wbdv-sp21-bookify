const USERS_URL = "http://localhost:4000/api"

const register = (credentials) => {
  return fetch(`${USERS_URL}/register`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(credentials),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())
}

const profile = () => {
  return fetch(`${USERS_URL}/profile`, {
    method: "POST",
    credentials: "include"
  }).then(response => response.json())
}

const login = (credentials) => {
  return fetch(`${USERS_URL}/login`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(credentials),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())
}

const logout = () => {
  return fetch(`${USERS_URL}/logout`, {
    method: "POST",
    credentials: "include"
  }).then(() => {})
}

const getUserById = id =>
  fetch(`${USERS_URL}/users/${id}`).then(res => res.json())

const updateUser = (uid, user) => {
  return fetch(`${USERS_URL}/users/${uid}`, {
    method: "PUT",
    credentials: "include",
    body: JSON.stringify(user),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(response => response.json())
}

export default {
  register,
  profile,
  login,
  logout,
  getUserById,
  updateUser
}