import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

const Review = ({ review }) => {
  const isProfile = !!(useRouteMatch('/profile'))
  const isHome = useRouteMatch({ path: '/', strict: true })?.isExact
  const showBookInfo = isProfile || isHome
  return (
    <div>
      {showBookInfo ?
        <Link to={`/details/${review.bookId}`}>
          <strong>{review?.book?.volumeInfo?.title}</strong>
      </Link>
        : <Link to={`/profile/${review.userId}`}>
          <strong>{review?.user?.username}</strong>
        </Link>}
      <p className="mb-0">{review.review}</p>
      </div>
  )
}
export default Review