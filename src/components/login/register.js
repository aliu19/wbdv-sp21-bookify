import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="container-fluid">
      <div className="row">
      <h1>
          Register
        </h1>
      </div>
      <form
        onSubmit={() => { }}>
        <div className="row mb-2">
          <label htmlFor="username">Username</label>
          <input id="username" className="form-control"></input>
        </div>
        <div className="row mb-2">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="form-control"></input>
        </div>
        <div className="row mb-2">
          <label htmlFor="firstName">First name</label>
          <input id="firstName" className="form-control"></input>
        </div>
        <div className="row mb-4">
          <label htmlFor="lastName">Last name</label>
          <input id="lastName" className="form-control"></input>
        </div>
        <div className="row mb-4">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" className="form-control"></input>
        </div>
        <div className="row mb-4">
          <button className="btn btn-primary" type="submit">Register</button>
          <Link className="btn btn-link" to="/login">Login</Link>
        </div>
      </form>
      {/*  TODO CreateUser
      TODO username, password, first name, last name, email, role
      TODO link to login*/}
    </div>

  )
}
export default Register