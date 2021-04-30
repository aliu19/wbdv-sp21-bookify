import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import userService from "../../services/user-service"

const YourProfile = () => {

  const [currentUser, setCurrentUser] = useState({})
  const history = useHistory()
  const updateUser = () => {
    userService.updateUser(currentUser._id, currentUser)
    .then((updatedUser) => {
      setCurrentUser(updatedUser)
    })
  }

  useEffect(() => {
    userService.profile()
    .then((currentUser) => {
      setCurrentUser(currentUser)
    })
  }, [])

  return (
      <div>
        <h1>
          Welcome {currentUser.username}
        </h1>

        <form className="container-fluid">
          <div className="row mb-2">
            <label>Username</label>
            <input className="form-control"
                   onChange={(e) => {setCurrentUser({...currentUser, username: e.target.value})}}
                   value={currentUser.username}></input>
          </div>
          <div className="row mb-2">
            <label>Password</label>
            <input className="form-control"
                   // type="password"
                   onChange={(e) => {setCurrentUser({...currentUser, password: e.target.value})}}
                   value={currentUser.password}></input>
          </div>
          <div className="row mb-2">
            <label>First name</label>
            <input className="form-control"
                   onChange={(e) => {setCurrentUser({...currentUser, firstName: e.target.value})}}
                   value={currentUser.firstName}></input>
          </div>
          <div className="row mb-2">
            <label>Last name</label>
            <input className="form-control"
                   onChange={(e) => {setCurrentUser({...currentUser, lastName: e.target.value})}}
                   value={currentUser.lastName}></input>
          </div>
          <div className="row mb-2">
            <label>Email</label>
            <input className="form-control"
                   type="email"
                   onChange={(e) => {setCurrentUser({...currentUser, email: e.target.value})}}
                   value={currentUser.email}></input>
          </div>
          <div className="row mb-4">
          <label>Role</label>
          <select className="form-control"
            onChange={(e) => { setCurrentUser({ ...currentUser, role: e.target.value }) }}
            value={currentUser.role}
            disabled="disabled">
            <option value="GENERAL_USER">General User</option>
            <option value="ADMIN">Admin</option>
          </select>
          </div>
          <div className="row mb-4 justify-content-between">
            <button className="btn btn-primary"
                    onClick={updateUser}>
              Update
            </button>
          </div>
        </form>

      {/*
      TODO UpdateUser, DeleteUser
      TODO show username, password, first name, last name, email, role
      TODO render book lists and reviews the user made*/}
      </div>
  )
}
export default YourProfile