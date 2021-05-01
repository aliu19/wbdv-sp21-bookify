import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import userService from "../../services/user-service"

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" })
  const history = useHistory()
  const login = () => {
    userService.login(credentials)
      .then((user) => {
        if (user === 0) {
          alert("Wrong username or password. Please try again.")
        } else {
          history.push("/profile")
        }
      })
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <h1>
          Login
        </h1>
      </div>
      <div className="row mb-2">
        <label>Username</label>
        <input className="form-control"
          onChange={(e) => { setCredentials({ ...credentials, username: e.target.value }) }}
          placeholder="username"></input>
      </div>
      <div className="row mb-4">
        <label>Password</label>
        <input className="form-control"
          onChange={(e) => { setCredentials({ ...credentials, password: e.target.value }) }}
          placeholder="password"></input>
      </div>
      <div className="row mb-4 justify-content-between">
        <button className="btn btn-primary"
          onClick={login}>
          Login
          </button>
        <Link className="btn btn-link float-right" to="/register">Register</Link>
      </div>
      {/*  TODO GetUser
      TODO username and password
      TODO link to register*/}
    </div>
  )
}
export default Login