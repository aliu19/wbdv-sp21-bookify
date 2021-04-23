import React from 'react'
import './components_css/Header.css'
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <SearchIcon />
                <input
                    placeholder="Search for Artists, Songs"
                    text="text"
                />
            </div>
            <div className="header_right">
                <Avatar src="" alt="TC" />
                <h4>Timothy Chen</h4>
            </div>
        </div>

    )
}

export default Header;