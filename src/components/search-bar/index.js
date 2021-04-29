import { useRef, useState } from "react"
import { Link } from "react-router-dom"

const SearchBar = ({ value }) => {
    const searchInput = useRef(null)
    const [inputValue, setInputValue] = useState(value || '')
    return (<div>
        <input ref={searchInput} value={inputValue}
            onChange={e => setInputValue(e.target.value)}/>
        <Link className="btn btn-primary"
                to={`/search/${inputValue}`}>
            Search
        </Link>
    </div>)
}

export default SearchBar