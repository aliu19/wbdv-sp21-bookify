import { useDataLayerValue } from './DataLayer';
import './components_css/PlaylistCard.css'

const PlaylistCard = ({ playlist }) => {
    return playlist ? (<div className="playlist-card">
        <img className="playlist-card__image" src={playlist.images[0].url}></img>
        <p className="playlist-card__name">{playlist.name}</p>
    </div>) : null
}

export default PlaylistCard