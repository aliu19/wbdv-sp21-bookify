import { useCallback, useEffect, useState } from 'react'
import bookService from '../../services/book-service'
import BookRow from '../book-row'

const BookList = ({ bookList }) => {
    const [books, setBooks] = useState([])

    const findBooks = useCallback(async () => {
        const b = await bookList?.books && Promise.all(bookList?.books.map(u => bookService.findBookById(u)))
        setBooks(await b)
    }, [bookList.books])

    useEffect(() => findBooks(), [findBooks])

    return <div>
        <h4 className="mt-4">{bookList?.name}</h4>
        <ul className="pl-0">
            {
                books.length && books.map(book =>
                    <li className="list-group-item" key={book.id}>
                        <BookRow book={book} />
                    </li>
                )
            }
        </ul>
    </div>

}

export default BookList