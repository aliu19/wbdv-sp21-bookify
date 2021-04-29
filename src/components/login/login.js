import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="container-fluid">
      <div className="row">
      <h1>
          Login
        </h1>
      </div>
      <form
        onSubmit={() => { }}>
        <div className="row mb-2">
          <label htmlFor="username">Username</label>
          <input id="username" className="form-control"></input>
        </div>
        <div className="row mb-4">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="form-control"></input>
        </div>
        <div className="row mb-4">
          <button className="btn btn-primary" type="submit">Login</button>
          <Link className="btn btn-link" to="/register">Register</Link>
        </div>
      </form>
      {/*  TODO GetUser
      TODO username and password
      TODO link to register*/}
      </div>
  )
}
export default Login