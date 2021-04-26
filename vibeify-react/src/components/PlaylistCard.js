import { useDataLayerValue } from './DataLayer';
import './components_css/PlaylistCard.css'
import { Link } from 'react-router-dom'

const PlaylistCard = ({ playlist }) => {
    return playlist ? (<Link className="playlist-card">
        <img className="playlist-card__image" src={playlist.images[0].url}></img>
        <p className="playlist-card__name">{playlist.name}</p>
    </Link>) : null
}

export default PlaylistCard