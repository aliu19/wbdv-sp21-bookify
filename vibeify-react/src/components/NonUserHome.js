import './components_css/NonUserHome.css'
import Header from './Header'
import PlaylistCard from './PlaylistCard'

const NonUserHome = ({ spotify }) => {
    return (
        <div className="non-user-home">
            <Header></Header>
            <div class="playlist-grid">
                
            </div>
        </div>
    )
}

export default NonUserHome;