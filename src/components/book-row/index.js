import { Link } from "react-router-dom";


const BookRow = ({ book }) => {
    return (
        <Link className="d-flex" to={`/details/${book.id}`}>
            <div className="row w-100">
                <div className="col-12 col-md-11">{book.volumeInfo.title}</div>
                <div className="d-none d-md-block col-1">
                    {book.volumeInfo.imageLinks.smallThumbnail ?
                        <img className="img-fluid"
                            src={book.volumeInfo.imageLinks.smallThumbnail}
                            alt={`Book cover for ${book.volumeInfo.title}`} /> :
                        <div className="w-100"></div>}
                </div>
            </div>
        </Link >
    )
}

export default BookRow