import React, {useEffect, useState} from "react";
import bookService from "../../services/book-service"
import {Link, useParams, useHistory} from "react-router-dom";
import Header from '../header'

const Search = () => {

  const { searchQuery } = useParams()
  const [results, setResults] = useState({ items: [] })

  useEffect(() => {
    searchQuery && bookService.findBookByTitle(searchQuery).then(result => setResults(result))
  }, [searchQuery])

  return(
    <div>
      <h1>Search: {searchQuery}</h1>
        <ul className="list-group">
          {
            results.items.map(book =>
                <li className="list-group-item" key={book.id}>
                  <Link to={`/details/${book.id}`}>
                    {book.volumeInfo.title}
                  </Link>
                </li>
            )
          }
        </ul>
      </div>
  )
}
export default Search