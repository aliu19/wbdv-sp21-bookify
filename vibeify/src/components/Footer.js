import React, { useEffect, useState } from "react";
import './components_css/Footer.css';
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";

function Footer() {
    return (
        <div className="footer">

            {/*TODO:  SONG ALBUM PHOTO AND INFO IS HARDCODED. MAKE DYNAMIC */}
            {/* LEFT SIDE OF FOOTER */}
            <div className="footer_left">
                <img 
                    className="footer_albumLogo"
                    src="https://images-na.ssl-images-amazon.com/images/I/81XiZxda-8L._AC_UL600_SR600,600_.jpg"
                    alt=""
                />
                <div classNam="footer_songInfo"></div>
                    <h4>Save Your Tears</h4>
                    <br />
                    <p>The Weeknd</p>
            </div>

            {/* CENTER OF FOOTER */}
            <div className="footer_center">
                <ShuffleIcon className="footer_green" />
                <SkipPreviousIcon className="footer_icon" />
                <PlayCircleOutlineIcon fontsize="large" className="footer_icon" />
                <SkipNextIcon className="footer_icon" />
                <RepeatIcon className="footer_green" />
            </div>

            {/* RIGHT SIDE OF FOOTER */}
            <div className="footer_right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>

                </Grid>
            </div>
        
        </div>

    )
}

export default Footer;