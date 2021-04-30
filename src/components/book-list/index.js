import { Fragment, useCallback, useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import bookListService from '../../services/book-list-service'
import bookService from '../../services/book-service'
import BookRow from '../book-row'

const BookList = ({ bookList, currentUser }) => {
    const [books, setBooks] = useState([])
    const [editing, setEditing] = useState(false)
    const [deleted, setDeleted] = useState(false)
    const isHome = useRouteMatch({ path: '/', strict: true })?.isExact
    const canEdit = currentUser?.role === "ADMIN" || currentUser?._id === bookList?.userId

    const findBooks = useCallback(async () => {
        const b = await bookList?.books && Promise.all(bookList?.books.map(u => bookService.findBookById(u)))
        setBooks(await b)
    }, [bookList.books])

    useEffect(() => findBooks(), [findBooks])

    const deleteList = () => {
        bookListService.deleteBookList(bookList._id)
        setDeleted(true)
    }

    const deleteBook = (bid) => {
        const newList = books.filter(b => b.id !== bid)
        console.log({ ...bookList, books: newList })
        bookListService.updateBookList(bookList._id, { ...bookList, books: newList })
        setBooks(newList)
    }

    return deleted ? null :
        (<div>
            <div className="">
                <h4 className="mt-4 d-inline-block">{bookList?.name}</h4>
                {canEdit && <Fragment>
                    <button className="btn btn-link text-primary"
                        onClick={() => setEditing(!editing)}>
                        <i className={!editing ? "fa fa-edit" : "fa fa-check"}></i>
                    </button>
                    <button className="btn btn-link text-primary"
                        onClick={deleteList}>
                        <i className="fa fa-trash"></i>
                    </button>
                </Fragment>}
            </div>
        <ul className="pl-0">
                {
                    books.length ? books.map(book =>
                        <li className="list-group-item" key={book.id}>
                            <BookRow editing={editing} book={book} deleteBook={deleteBook} />
                        </li>) : null
            }
        </ul>
        </div >)
}

export default BookList