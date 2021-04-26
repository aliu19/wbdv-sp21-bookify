import React, { Fragment, useEffect, useState } from 'react';
import Login from './components/Login';
import Player from './components/Player';
import { getTokenFromUrl } from './Spotify_AuthFlow';
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./components/DataLayer";
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom'
import NonUserHome from './components/NonUserHome';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  // after spotify handles the authentication, we get the access token from the URL we're given
  useEffect(() => {
    const hash = getTokenFromUrl();
    // clears the access token from the end of the URL for security purposes
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      // gives access token to the spotify API
      spotify.setAccessToken(_token);

      // if logged in here, then dispatch action will run. the dispatch action will pop the user into the datalayer,
      // afterwards we will pull it from the data layer and read it
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      // call to the API saying get the user's playlists 
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      // hardcoded for the Proximity playlist
      spotify.getPlaylist('3VEFRGe3APwGRl4eTpMS4x').then((response) =>
        dispatch({
          type: "SET_PROXIMITY",
          proximity: response,
        })
      );
    };
  }, [token, dispatch]);

  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Routes for users */}
          {token && (
            <Fragment>
              <Route path="/"><Player spotify={spotify} /></Route>
              <Redirect path="/login" to="/"></Redirect>
            </Fragment>
          )}
            {/* Routes for non-users */}
          {!token && (
            <Fragment>
              <Route path="/" exact><NonUserHome spotify={spotify} /></Route>
              <Route path="/login" component={Login}></Route>
            </Fragment>
          )}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
