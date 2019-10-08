import React from 'react';
import './App.css';

import Player from './Components/Player.js'

function App() {
  return (
    <div className="App">
      <div className="title">Playit!</div>
      <Player />
      <audio src="lib/music/gameofthrones.mp3" controls />
    </div>
  );
}

export default App;
