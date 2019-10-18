import React from 'react';
import './App.css';

import Player from './Components/Player.js'
import Audio from './Components/Audio.js'

class App extends React.Component {

  componentWillMount() {
      document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }


  state = {
    audio: "lib/music/This Will Be Our Year.mp3",
    hidden: false,
    elapsed: 0,
    currentTime: 0,
    duration: 0,
    playing: false,
    pause: false
  }




  // percentElapsed = (event) => {
  //   // console.log((event.target.children[0].currentTime / event.target.children[0].duration))
  //   //
  //   this.setState({
  //     elapsed: (event.target.children[0].currentTime / event.target.children[0].duration)
  //   }, console.log(this.state.elapsed))
  // }

  handleChange = (event, currentTime) => {
    //takes change in audio currentTime
    console.log('current time', event.target)
    this.setState({
      currentTime: event.target.currentTime
    })
  }

  play = (event) => {
    event.preventDefault()
    if(!this.state.playing && !this.state.pause){
      this.setState({
        playing: true
      })
    } else if (this.state.playing && !this.state.pause){
      this.setState({
        pause: true
      }, () => console.log(this.state.playing))
    } else if (this.state.playing && this.state.pause){
      this.setState({
        pause: false
      })
    }
  }

  changeProgress = (event) => {
    //page 587
    //client 586
    //screen 527
    console.log("screenX", event.screenX)
    //width 440
    let progress = (event.clientX - 587)
    let total = 430

    this.setState({
      elapsed: (progress / total)
    }, () => console.log(this.state.elapsed))

  }

  setElapsedWhenPaused = (event, currentTime, duration) => {

    console.log('hi', event.target.played)

    // this.setState({
    //   elapsed: (currentTime / duration)
    // }, () => console.log("elapsed when paused", this.state.elapsed))
  }

  setDuration = (event, duration) => {
    // console.log("duration is set", duration)
    this.setState({
      duration: duration
    }, () => console.log("duration is in state!", this.state.duration))
  }

  handleKeyDown = (event) => {
    console.log(event.key === " ")
    if(event.key === " "){
      this.play(event)
    }

  }


  render() {
    return (
      <div  className="App">
        <div className="title">Playit!</div>
        <Player onKeyDown={(e) => this.handleKeyDown(e)} currentTime={this.state.currentTime} elapsed={this.state.elapsed} duration={this.state.duration} changeProgress={this.changeProgress} pause={this.state.pause} playing={this.state.playing} play={this.play} elapsed={this.state.elapsed} percentElapsed={this.percentElapsed} name="Will"/>
        <Audio setDuration={this.setDuration} setElapsedWhenPaused={this.setElapsedWhenPaused} elapsed={this.state.elapsed} pause={this.state.pause} playing={this.state.playing} handleChange={this.handleChange} percentElapsed={this.percentElapsed} hidden={this.state.hidden} src={this.state.audio}/>
      </div>
    );
  }

}

//audio.currentTime is the amount of the song that has played in seconds
//audio.duration is the total length of the song

export default App;
