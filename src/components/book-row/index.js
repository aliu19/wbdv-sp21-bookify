import { Link } from "react-router-dom";
import styles from './book-row.module.scss'

const BookRow = ({ book, editing, deleteBook }) => {

    return book && (
        !editing ?
            <Link className={editing ? styles['disabled'] : undefined} to={`/details/${book.id}`}>
                <div className="row w-100">
                    <div className="col-12 col-md-11">
                        <span>{book?.volumeInfo?.title}</span>
                    </div>
                    <div className="d-none d-md-block col-1">
                        {book?.volumeInfo?.imageLinks?.smallThumbnail ?
                            <img className="img-fluid"
                                src={book.volumeInfo.imageLinks.smallThumbnail}
                                alt={`Book cover for ${book.volumeInfo.title}`} /> :
                            <div className="w-100"></div>}
                    </div>
                </div>
            </Link > :
            <div className="row w-100">
                <div className="col-12 col-md-11">
                    <span>{book?.volumeInfo?.title}</span>
                    {editing && <button className="btn btn-link text-primary"
                        onClick={() => deleteBook(book.id)}>
                        <i className="fa fa-trash"></i>
                    </button>}
                </div>
            <div className="d-none d-md-block col-1">
                {book?.volumeInfo?.imageLinks?.smallThumbnail ?
                    <img className="img-fluid"
                        src={book.volumeInfo.imageLinks.smallThumbnail}
                        alt={`Book cover for ${book.volumeInfo.title}`} /> :
                    <div className="w-100"></div>}
            </div>
            </div>
    )
}

export default BookRow