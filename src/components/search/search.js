import React from "react";
import {Link, useParams} from "react-router-dom";
import SongCard from '../song-card'
import SearchBar from '../search-bar'
import './search.module.scss'

const Search = () => {

  const {track} = useParams()

  return(
      <div>
        <h1>Search</h1>
      <SearchBar value={track}/>
        <ul>
          <li>
            <Link to="/details/123">
              Result 1
            </Link>
            <SongCard song={'result1'}></SongCard>
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