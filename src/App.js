import React from 'react';
import './App.css';

import Player from './Components/Player.js'
import Audio from './Components/Audio.js'

class App extends React.Component {



  state = {
    audio: "lib/music/This Will Be Our Year.mp3",
    hidden: false,
    elapsed: 0,
    progress: 0,
    test: "",
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

  handleChange = (event, elapsed) => {
    //takes change in audio currentTime and sets elapsed in state
    event.preventDefault()
    console.log('pew pew!', event.target.currentTime);
    this.setState({
      progress: (event.target.currentTime / event.target.duration)
    }, console.log('%celapsed time in state', 'font-size: 20px; color: blue', this.state.elapsed))
  }

  play = (event) => {
    event.preventDefault()
    console.log('playing the audio element now')
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
    // console.log(event.target, event.target.offsetLeft)
    let progress = (event.clientX - 340)
    let total = 433
    console.log('I clicked:', event.target, (progress / total))

    this.setState({
      elapsed: (progress / total)
    })


  }


  render() {
    console.log("Are we playing?", this.state.playing, "are we paused?", this.state.pause)
    return (
      <div className="App">
        <div className="title">Playit!</div>
        <Player changeProgress={this.changeProgress} pause={this.state.pause} playing={this.state.playing} play={this.play} progress={this.state.progress} percentElapsed={this.percentElapsed} name="Will"/>
        <Audio elapsed={this.state.elapsed} pause={this.state.pause} playing={this.state.playing} handleChange={this.handleChange} percentElapsed={this.percentElapsed} hidden={this.state.hidden} src={this.state.audio}/>
      </div>
    );
  }

}

//audio.currentTime is the amount of the song that has played in seconds
//audio.duration is the total length of the song

export default App;
