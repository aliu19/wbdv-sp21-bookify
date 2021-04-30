import React from 'react'
import { Link } from 'react-router-dom'

const Review = ({ review }) => {
  return (
    <div>
      <Link to={`/profile/${review.userId}`}>
        <strong>{review.user.username}</strong>
      </Link>
      <p className="mb-0">{review.review}</p>
      </div>
  )
}
export default Review