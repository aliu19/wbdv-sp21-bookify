import { withRouter } from "react-router";
import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import styles from './header.module.scss'


const Header = ({ match, history, user }) => {
    console.log(match)
    const { params: { searchQuery } } = match
    const [search, setSearch] = useState(searchQuery || '')

    return (<nav className="nav navbar">
        <Link to="/" className='navbar-brand'>
            Vibeify
        </Link>
        <div className={styles["nav__contents"]}>
            <form className="form-inline">
                <div className={`mr-2 ${styles["search-bar__wrapper"]}`}>
                    <input className="form-control"
                        onChange={(event) => setSearch(event.target.value)}
                        value={search} />
                </div>
                <Link className="btn btn-primary"
                    to={`/search/${search}`}>
                    Search
                </Link>
            </form>
            <div>
                {user ? <Link className="btn btn-primary"
                    to="/logout">
                    Logout
                </Link>
                    : <NavLink className="btn btn-primary"
                        to="/login"
                        activeClassName="btn-dark">
                        Login
                </NavLink>}
            </div>
        </div>
    </nav>)
}

export default withRouter(Header);
