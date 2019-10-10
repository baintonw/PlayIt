import React from 'react';
import './App.css';

import Player from './Components/Player.js'
import Audio from './Components/Audio.js'

class App extends React.Component {



  state = {
    audio: "lib/music/This Will Be Our Year.mp3",
    hidden: "",
    elapsed: 0,
    test: "",
    playing: false
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

  play = (event) => {
    event.preventDefault()
    console.log('playing the audio element now')
    this.setState({
      playing: !this.state.playing
    }, console.log(this.state.playing))
  }


  render() {

    return (
      <div className="App">
        <div className="title">Playit!</div>
        <Player playing={this.state.playing} play={this.play} elapsed={this.state.elapsed} percentElapsed={this.percentElapsed} name="Will"/>
        <Audio playing={this.state.playing} handleChange={this.handleChange} percentElapsed={this.percentElapsed} hidden={this.state.hidden} src={this.state.audio}/>
      </div>
    );
  }

}

//audio.currentTime is the amount of the song that has played in seconds
//audio.duration is the total length of the song

export default App;
