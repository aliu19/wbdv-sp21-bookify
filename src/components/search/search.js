import React, {useEffect, useState} from "react";
import bookService from "../../services/book-service"
import {Link, useParams} from "react-router-dom";

const Search = () => {

  const {title} = useParams()
  const [results, setResults] = useState({items: []})

  useEffect(() => {
    if(title) {
      bookService.findBookByTitle(title)
      .then(result => setResults(result))
    }
  }, [])

  return(
      <div>
        <h1>Search</h1>
        <input className="form-control" value={title}/>
        <button className="btn btn-primary btn-block"
                onClick={() => bookService.findBookByTitle("harry potter")}>
          Search
        </button>
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