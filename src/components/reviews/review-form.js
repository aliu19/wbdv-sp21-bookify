import { useEffect, useState } from "react"
import { useParams, withRouter } from "react-router"
import reviewService from "../../services/review-service"
import userService from "../../services/user-service"

const ReviewForm = ({ match, history, userId }) => {

    const { bookId } = useParams()

    const [review, setReview] = useState("")
    const submitReview = () => {
        const r = {
            review,
            bookId,
            userId
        }
        reviewService.createReview(r)
    }
    return (
        <div>
            <form>
                <textarea
                    className="form-control"
                    placeholder="Write your review here"
                    value={review}
                    onChange={e => setReview(e.target.value)}>
                </textarea>
                <button
                    onClick={submitReview}
                    className="btn btn-primary my-2">Submit review</button>
            </form>
        </div>
    )
}

export default withRouter(ReviewForm)