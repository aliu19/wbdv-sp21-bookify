import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import reviewService from '../../services/review-service';
import userService from '../../services/user-service';
import ReviewList from '../reviews/review-list';
import BookList from '../book-list';

const OtherProfile = () => {
  const { profileId } = useParams();
  const [user, setUser] = useState({})
  const [reviews, setReviews] = useState({})
  const [bookLists, setBookLists] = useState({})


  useEffect(() => {
    userService.getUserById(profileId).then(res => setUser(res))
  }, [profileId])

  useEffect(() => {
    user._id && reviewService.findReviewsForUser(user._id).then(res => setReviews(res))
  }, [user])

  // useEffect(() => {
  //   user._id && userService.getBookLists(user._id).then(res => setBookLists(res))
  // }, [user])
  return (
      <div>
        <h1>
        Other Profile
        </h1>
      {user && user.username &&
        (<div>
          <h2 className="h3">
            Reviews by {user && user.username}
          </h2>
          <ReviewList reviews={reviews} />
          <h2 className="h3">
            Booklists by {user && user.username}
          </h2>
          {!!bookLists.length && bookLists.map(b => <BookList bookList={b} />)}
        </div>)
      }
      {/* {JSON.stringify(user)} */}
      {/* {JSON.stringify(bookLists)} */}
      {/* {JSON.stringify(reviews)} */}
      {/*  TODO GetUser*/}
    </div>
  )
}
export default OtherProfile