import React from 'react'
import './components_css/Player.css';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';

function Player({spotify}) {
    return (
        <div className="player">
            <div className="player_body">
            <Sidebar />
            <Body />
            </div>
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Player;