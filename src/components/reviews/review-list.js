import React from 'react'
import Review from './review'
import { useRouteMatch } from 'react-router-dom'

const ReviewList = ({ reviews, currentUser }) => {
  const isProfile = !!(useRouteMatch('/profile'))
  const isHome = useRouteMatch({ path: '/', strict: true })?.isExact
  const showBookInfo = isProfile || isHome
  const showAuthorInfo = !isProfile
  return (
    <ul className="ml-0 pl-0">
      {!!reviews.length && reviews.map(r =>
        <Review review={r} key={r._id} currentUser={currentUser}
          showBookInfo={showBookInfo}
          showAuthorInfo={showAuthorInfo} />
      )}
    </ul>
  )
}
export default ReviewList