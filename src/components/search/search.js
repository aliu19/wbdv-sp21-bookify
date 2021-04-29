import React, {useEffect, useState} from "react";
import bookService from "../../services/book-service"
import {Link, useParams, useHistory} from "react-router-dom";

const Search = () => {

  const {title} = useParams()
  const [results, setResults] = useState({items: []})
  const [searchTitle, setSearchTitle] = useState("")
  const history = useHistory()

  useEffect(() => {
    setSearchTitle(title)
    if(title) {
      bookService.findBookByTitle(title)
      .then(result => setResults(result))
    }
  }, [title])

  return(
      <div>
        <h1>Search</h1>
        <input className="form-control"
               onChange={(event) => setSearchTitle(event.target.value)}
               value={searchTitle }/>
        <button className="btn btn-primary btn-block"
                onClick={() => history.push(`/search/${searchTitle}`)}>
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