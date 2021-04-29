import React, {useEffect, useState} from "react";
import bookService from "../../services/book-service"
import { Link, useParams } from "react-router-dom";
import BookRow from "../book-row";

const Search = () => {

  const { searchQuery } = useParams()
  const [results, setResults] = useState({})
  const [searching, setSearching] = useState(true)

  useEffect(() => {
    searchQuery && bookService.findBookByTitle(searchQuery).then(result => {
      setResults(result);
      setSearching(false);
    })

  }, [searchQuery])

  return(
    <div>
      <h1>Search: {searchQuery}</h1>
      {results.items ? (<ul className="list-group">
          {
            results.items.map(book =>
                <li className="list-group-item" key={book.id}>
                <BookRow book={book} />
                </li>
            )
          } 
      </ul>) :
        searching ?
          (<div>Loading results</div>)
          :
        (<div>There were no results for "{searchQuery}"</div>)}
      </div>
  )
}
export default Search