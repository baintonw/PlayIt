import React from 'react'

import ReactDOM from "react-dom";

class Audio extends React.Component{


  state = {
    playtime: 0
  }






  componentDidUpdate(){
    console.log("current time", this._audio.played)
    if((this.props.elapsed * this._audio.duration) !== 0){
      let playtime = (this.props.elapsed * this._audio.duration)
      this._audio.currentTime = playtime
    }

    // this._audio.currentTime = (this.props.elapsed * this._audio.duration)
    if(this.props.playing && this.props.pause){
      this._audio.pause()
    } else if(this.props.playing && !this.props.pause){
      this._audio.play()
    }

  }

  setPlaytime = () => {
    // // console.log(this.props.elapsed)
    // this.setState({
    //   playtime: this._audio.currentTime
    // }, () => console.log(this.state.playtime))
  }
  // console.log("Elapsed?", this.props.elapsed, this._audio)

  render(){
    return(
      <div className="audio">
        <audio id="button" onPause={(e) => this.props.setElapsedWhenPaused(e)} ref={(el) => {this._audio = el}} hidden={this.props.hidden} src={this.props.src} controls />
      </div>
    )

  }

}

export default Audio;
