import { useEffect, useState } from "react";
import bookService from "../../services/book-service";
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
      <br />
      {/*  TODO change to logout button when logged in
      TODO recent reviews*/}
      </div>
  )
}
export default Home