import React, {useEffect, useState} from "react";
import bookService from "../../services/book-service"
import { Link, useParams } from "react-router-dom";

const Search = () => {

  const { searchQuery } = useParams()
  const [results, setResults] = useState({ items: [] })

  useEffect(() => {
    searchQuery && bookService.findBookByTitle(searchQuery).then(result => setResults(result))
  }, [searchQuery])

  return(
    <div>
      <h1>Search: {searchQuery}</h1>
      {results.items.length ? (<ul className="list-group">
          {
            results.items.map(book =>
                <li className="list-group-item" key={book.id}>
                  <Link to={`/details/${book.id}`}>
                    {book.volumeInfo.title}
                  </Link>
                </li>
            )
          } 
      </ul>) :
        (<div>There were no results for "{searchQuery}"</div>)}
      </div>
  )
}
export default Search