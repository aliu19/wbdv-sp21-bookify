import React from "react";
import songService from "../../services/song-service"
import {Link, useParams} from "react-router-dom";

const Search = () => {

  const {track} = useParams()

  return(
      <div>
        <h1>Search</h1>
        <input value={track}/>
        <button className="btn btn-primary"
                onClick={() => songService.findSongByTitle("4ever")}>
          Search
        </button>
        <ul>
          <li>
            <Link to="/details/123">
              Result 1
            </Link>
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