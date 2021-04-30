import { useEffect, useState } from "react";
import bookService from "../../services/book-service";
import BookCard from "../book-card";
import Details from "../search/details";
import reviewService from "../../services/review-service"
import ReviewList from "../reviews/review-list";

const Home = () => {
  const id = 'jaM7DwAAQBAJ'
  const [book, setBook] = useState(null)
  const [reviews, setReviews] = useState({})
  useEffect(() => {
    bookService.findBookById(id).then(result => {
      setBook(result);
    })
    reviewService.findReviewsForHome()
    .then(reviews => setReviews(reviews))
  }, [])
  console.log(reviews)

  return (
    <div>
      <h1 className="sr-only">Home</h1>
      {/* Featured */}
      <div className="bg-dark text-light">
        <div className="container-fluid py-4">
          <Details bid={id} summary />
        </div>
      </div>

      <div className="p-4">
        <h2 className="h4">These are the books that everyone's talking about:</h2>
        <ReviewList reviews={reviews}/>
      </div>
    </div>
  )
}
export default Home