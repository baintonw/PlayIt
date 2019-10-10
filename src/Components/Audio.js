import React from 'react'

import ReactDOM from "react-dom";

class Audio extends React.Component{
  componentDidUpdate(){
    console.log("current time", this._audio.currentTime)
    this._audio.currentTime = (this.props.elapsed * this._audio.duration)

    // this._audio.currentTime = (this.props.elapsed * this._audio.duration)
    if(this.props.playing && this.props.pause){
      this._audio.pause()
    } else if(this.props.playing && !this.props.pause){
      this._audio.play()
    }


  }
  // console.log("Elapsed?", this.props.elapsed, this._audio)

  render(){

    return(
      <div className="audio">
        <audio id="button" ref={(el) => {this._audio = el}} hidden={this.props.hidden} src={this.props.src} controls />
      </div>
    )

  }

}

export default Audio;
