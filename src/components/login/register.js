import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import userService from "../../services/user-service"

const Register = () => {
  const [credentials, setCredentials] = useState({username: "", password: "", firstName: "", lastName: "", email: "", role: "GENERAL_USER"})
  const history = useHistory()
  const register = () => {
    userService.register(credentials)
      .then((user) => {
        if(user === 0) {
          alert("The username is already taken. Please choose another one.")
        } else {
          history.push("/profile")
        }
      })
  }

  return (
    <div className="container-fluid">
      <div className="row">
      <h1>
          Register
        </h1>
      </div>
      <form>
        <div className="row mb-2">
          <label>Username</label>
          <input className="form-control"
                 onChange={(e) => {setCredentials({...credentials, username: e.target.value})}}
                 value={credentials.username}></input>
        </div>
        <div className="row mb-2">
          <label>Password</label>
          <input className="form-control"
                 onChange={(e) => {setCredentials({...credentials, password: e.target.value})}}
                 value={credentials.password}></input>
        </div>
        <div className="row mb-2">
          <label>First name</label>
          <input className="form-control"
                 onChange={(e) => {setCredentials({...credentials, firstName: e.target.value})}}
                 value={credentials.firstName}></input>
        </div>
        <div className="row mb-4">
          <label>Last name</label>
          <input className="form-control"
                 onChange={(e) => {setCredentials({...credentials, lastName: e.target.value})}}
                 value={credentials.lastName}></input>
        </div>
        <div className="row mb-4">
          <label>Email</label>
          <input className="form-control"
                 onChange={(e) => {setCredentials({...credentials, email: e.target.value})}}
                 value={credentials.email}></input>
        </div>
        {/*TODO for admin to change in people's profiles*/}
        {/*<div className="row mb-4">*/}
        {/*  <label>Role</label>*/}
        {/*  <select className="form-control"*/}
        {/*          onChange={(e) => {setCredentials({...credentials, role: e.target.value})}}*/}
        {/*          value={credentials.role}>*/}
        {/*    <option value="none" className="selected disabled hidden"/>*/}
        {/*    <option value="GENERAL_USER">General User</option>*/}
        {/*    <option value="ADMIN">Admin</option>*/}
        {/*  </select>*/}
        {/*</div>*/}
        <div className="row mb-4">
          <button className="btn btn-primary"
                  onClick={register}>
            Register
          </button>
          <Link className="btn btn-link" to="/login">Login</Link>
        </div>
      </form>
    </div>

  )
}
export default Register