import React from 'react';
import { loginUrl } from '../spotify';
import './components_css/Login.css';

function Login() {
    return (
        <div className="login">
            {/* Login Image */}
            <img
                src="https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png"
                alt=""
            />
            {/* Spotify login button */}
            <a href={loginUrl}>LOGIN TO VIBEIFY</a>
        </div>
    )
}

export default Login;