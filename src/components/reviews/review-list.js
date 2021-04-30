import React from 'react'
import Review from './review'

const ReviewList = ({ reviews }) => {
  return (
    <ul className="ml-0 pl-0">
      {!!reviews.length && reviews.map(r =>
        <li key={r._id}
          className="card mb-2 p-3 pb-2">
          <Review review={r} />
        </li>
      )}
    </ul>
  )
}
export default ReviewList