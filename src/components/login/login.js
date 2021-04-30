import React from 'react'
import {Link, useHistory} from 'react-router-dom'

const Login = () => {
  const history = useHistory()
  const login = () => {
    history.push("/profile")
  }

  return (
    <div className="container-fluid">
      <div className="row">
      <h1>
          Login
        </h1>
      </div>
      <form>
        <div className="row mb-2">
          <label htmlFor="username">Username</label>
          <input id="username" className="form-control"></input>
        </div>
        <div className="row mb-4">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="form-control"></input>
        </div>
        <div className="row mb-4">
          <button className="btn btn-primary"
                  type="submit"
                  onClick={login}>
            Login
          </button>
          <Link className="btn btn-link float-right" to="/register">Register</Link>
        </div>
      </form>
      {/*  TODO GetUser
      TODO username and password
      TODO link to register*/}
      </div>
  )
}
export default Login