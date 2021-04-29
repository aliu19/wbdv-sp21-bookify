import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
    return (
        <Link className="text-dark font-weight-bold" to={`/details/${book.id}`}>
            <div className="">
                    {book?.volumeInfo?.imageLinks?.smallThumbnail ?
                        <img className=""
                            src={book.volumeInfo.imageLinks.smallThumbnail}
                            alt={`Book cover for ${book.volumeInfo.title}`} /> :
                        <div className="w-100"></div>}
                </div>
            <div className="">{book.volumeInfo.title}</div>
        </Link >
    )
}

export default BookCard