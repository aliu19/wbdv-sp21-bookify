import React, { useEffect, useState } from 'react'
import reviewService from '../../services/review-service'
import userService from "../../services/user-service"
import BookList from '../book-list'
import ReviewList from '../reviews/review-list'

const YourProfile = () => {

  const [currentUser, setCurrentUser] = useState({})
  const [reviews, setReviews] = useState({})
  const [bookLists, setBookLists] = useState({})

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

  useEffect(() => {
    currentUser._id && reviewService.findReviewsForUser(currentUser._id).then(res => setReviews(res))
  }, [currentUser])

  useEffect(() => {
    currentUser._id && userService.getBookLists(currentUser._id).then(res => setBookLists(res))
  }, [currentUser])

  return (
    <div>
      <h1>
        Welcome {currentUser.username}
      </h1>

      <form className="container-fluid">
        <div className="row mb-2">
          <label>Username</label>
          <input className="form-control"
            onChange={(e) => { setCurrentUser({ ...currentUser, username: e.target.value }) }}
            value={currentUser.username}></input>
        </div>
        <div className="row mb-2">
          <label>Password</label>
          <input className="form-control"
            onChange={(e) => { setCurrentUser({ ...currentUser, password: e.target.value }) }}
            value={currentUser.password}></input>
        </div>
        <div className="row mb-2">
          <label>First name</label>
          <input className="form-control"
            onChange={(e) => { setCurrentUser({ ...currentUser, firstName: e.target.value }) }}
            value={currentUser.firstName}></input>
        </div>
        <div className="row mb-2">
          <label>Last name</label>
          <input className="form-control"
            onChange={(e) => { setCurrentUser({ ...currentUser, lastName: e.target.value }) }}
            value={currentUser.lastName}></input>
        </div>
        <div className="row mb-2">
          <label>Email</label>
          <input className="form-control"
            type="email"
            onChange={(e) => { setCurrentUser({ ...currentUser, email: e.target.value }) }}
            value={currentUser.email}></input>
        </div>
        <div className="row mb-4">
          <label>Role</label>
          <select className="form-control"
            onChange={(e) => { setCurrentUser({ ...currentUser, role: e.target.value }) }}
            value={currentUser.role}
            disabled="disabled">
            {/*<option value="none" className="selected disabled hidden" />*/}
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
      {
        currentUser && currentUser.username &&
        (<div className="mb-4">
          <h2 className="h3">
            Reviews by {currentUser && currentUser.username}
          </h2>
          <ReviewList reviews={reviews} />
          <h2 className="h3">
            Booklists by {currentUser && currentUser.username}
          </h2>
          {!!bookLists.length ? bookLists.map(b => <BookList bookList={b} key={b.name} />) : <div>No booklists here!</div>}
        </div >)
      }
      {/*
      TODO UpdateUser, DeleteUser
      TODO show username, password, first name, last name, email, role
      TODO render book lists and reviews the user made*/}
    </div>
  )
}
export default YourProfile