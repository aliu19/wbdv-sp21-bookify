import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import userService from "../../services/user-service"

const YourProfile = () => {

  const history = useHistory()
  const logout = () => {
    userService.logout()
    .then(() => {
      history.push("/")
    })
  }

  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    userService.profile()
    .then((currentUser) => {
      setCurrentUser(currentUser)
    })
  }, [])

  return (
      <div>
        <h1>
          Welcome {currentUser && currentUser.username}
        </h1>

        {JSON.stringify(currentUser)}

        <button className="btn btn-primary"
                onClick={logout}>
          Logout
        </button>
      {/*
      TODO UpdateUser, DeleteUser
      TODO show username, password, first name, last name, email, role
      TODO render book lists and reviews the user made*/}
      </div>
  )
}
export default YourProfile