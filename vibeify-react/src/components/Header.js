import React, { Fragment, useRef } from 'react'
import './components_css/Header.css'
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from './DataLayer';
import { Link } from 'react-router-dom'

function Header() {
    const [{ user }, dispatch] = useDataLayerValue();
    const searchInput = useRef(null)

    return (
        <div className="header">
            <div className="header_left">
                {!user && <Link to="/" className="header__title">Vibeify</Link>}
                <div className="search-bar"
                    onClick={() => searchInput.current && searchInput.current.focus()}>
                    <SearchIcon />
                    <input
                        ref={searchInput}
                        placeholder="Search for Artists, Songs"
                        type="text"
                        className="search-bar__input"
                    />
                </div>
            </div>
            <div className="header_right">
                {user ? (<Fragment>
                    <Avatar
                        src={user?.images[0]?.url}
                        alt={user?.display_name} />
                    <h4>{user?.display_name}</h4>
                </Fragment>) :
                    <Link to="/login" className="button--primary">Login</Link>}
            </div>
        </div >
    )
}

export default Header;