import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import reviewService from '../../services/review-service'

const Review = ({ review, currentUser, showBookInfo, showAuthorInfo }) => {
  const canEdit = currentUser?.role === "ADMIN" || currentUser?._id === review.userId
  const [editing, setEditing] = useState(false)
  const [text, setText] = useState(review?.review || '')
  const [deleted, setDeleted] = useState(false)

  const updateReview = () => {
    reviewService.updateReview(review._id, { ...review, review: text })
    setEditing(false)
  }

  const deleteReview = () => {
    reviewService.deleteReview(review._id)
    setDeleted(true)
  }
  return !deleted ? (
    <li
      className="card mb-2 p-3 pb-2">
      <div className="d-flex justify-content-between">
      <div>
          {showBookInfo &&
            <Link className="d-block"
              to={`/details/${review.bookId}`}>
          <strong>{review?.book?.volumeInfo?.title}</strong>
            </Link>}
          {showAuthorInfo && <Link
            className="d-block font-italic"
            to={`/profile/${review.userId}`}>
            by: {review?.user?.username}
        </Link>}
          {editing ?
            <div>
              <form>
                <textarea
                  className="form-control"
                  placeholder="Write your review here"
                  value={text}
                  onChange={e => setText(e.target.value)}>
                </textarea>
                <button
                  onClick={updateReview}
                  className="btn btn-primary my-2 mr-2">Submit review
                </button>
              </form>
            </div>
            : <p className="mb-0">{text}</p>}
        </div>
        <div>
          {canEdit &&
            <Fragment>
              <button className="btn btn-link text-primary"
                onClick={deleteReview}>
                <i className="fa fa-trash"></i>
              </button>
              <button className="btn btn-link text-primary"
                onClick={() => setEditing(true)}>
                <i className="fa fa-edit"></i>
              </button>
            </Fragment>
          }
        </div>
      </div>
    </li>
  ) : null
}
export default Review