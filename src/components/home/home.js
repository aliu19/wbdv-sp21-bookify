import { useEffect, useState } from "react";
import bookService from "../../services/book-service";
import BookCard from "../book-card";
import Details from "../search/details";

const Home = () => {
  const id = 'jaM7DwAAQBAJ'
  const [book, setBook] = useState(null)
  useEffect(() => {
    bookService.findBookById(id).then(result => {
      setBook(result);
    })
  }, [])
  console.log(book)

  return (
    <div>
      <h1 className="sr-only">Home</h1>
      {/* Featured */}
      <div className="bg-dark text-light">
        <div className="container-fluid py-4">
          <Details bid={id} summary />
        </div>
      </div>
      <div className="container-fluid py-4">
        <div className="row">
          {Array(6).fill(book).map(b => book && (
            <div className="col-6 col-sm-4 col-md-2">
              <BookCard book={book} />
            </div>
          ))}
        </div>
      </div>

      {/*  TODO change to logout button when logged in
      TODO recent reviews*/}
      </div>
  )
}
export default Home