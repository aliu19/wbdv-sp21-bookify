import React from 'react'
import './components_css/Body.css'
import { useDataLayerValue } from './DataLayer';
import Header from './Header';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from './SongRow';

function Body({ spotify }) {
    const [{ proximity }, dispatch] = useDataLayerValue();


    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body_info">
                <img
                    src={proximity?.images[0].url}
                    alt="" 
                    />
                <div className="body_infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Proximity</h2>
                    <p>{proximity?.description}</p>
                </div>
            </div>
            <div className="body_songs">
            <div className="body_icons">
                <PlayCircleFilledIcon className="body_play" />
                <FavoriteIcon fontSize="large" />
                <MoreHorizIcon />
            </div>

            {/* LIST OF SONGS (HARD CODED IN PROXIMITY PLAYLIST*/}
            {proximity?.tracks.items.map((item) => (
          <SongRow track={item.track} />
          ))}

        </div>
        </div>


    )
}

export default Body;