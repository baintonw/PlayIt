import React from 'react';
import './App.css';

import Player from './Components/Player.js'
import Audio from './Components/Audio.js'

class App extends React.Component {

  state = {
    audio: "lib/music/gameofthrones.mp3",
    hidden: "",
    elapsed: 0
  }


  percentElapsed = (event) => {
    // console.log((event.target.children[0].currentTime / event.target.children[0].duration))

    this.setState({
      elapsed: (event.target.children[0].currentTime / event.target.children[0].duration)
    }, console.log(this.state.elapsed))
  }

  handleChange = (event, elapsed) => {
    event.preventDefault()
    console.log('pew pew!', event.target.currentTime);
    this.setState({
      elapsed: (event.target.currentTime / event.target.duration)
    }, console.log('%celapsed time in state', 'font-size: 20px; color: blue', this.state.elapsed))
  }

  render() {
    return (
      <div className="App">
        <div className="title">Playit!</div>
        <Player percentElapsed={this.percentElapsed} name="Will"/>
        <Audio handleChange={this.handleChange} percentElapsed={this.percentElapsed} hidden={this.state.hidden} src={this.state.audio}/>
      </div>
    );
  }

}

//audio.currentTime is the amount of the song that has played in seconds
//audio.duration is the total length of the song

export default App;
