import React from "react";
import songService from "../../services/song-service"

const Search = () => {
  return(
      <div>
        <h1>Search</h1>
        <input/>
        <button className="btn btn-primary">Search</button>
        <ul>
          <li>
            Result 1
          </li>
          <li>
            Result 2
          </li>
          <li>
            Result 3
          </li>
        </ul>
      </div>
  )
}
export default Search