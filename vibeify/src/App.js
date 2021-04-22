import React from 'react'
import './App.scss';
import Nav from './components/Nav'
import Main from './components/Main'

const App = () => {
  return (
    <div> className="outerWrap"
      <div className="App">
        <Nav />
        <Main />
      </div>
      <div className="musicControls">add music controls here later</div>
    </div>
  );
}

export default App;
