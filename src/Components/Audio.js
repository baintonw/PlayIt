import React from 'react'

import ReactDOM from "react-dom";

class Audio extends React.Component{

  start = () => {
    const audio = document.querySelector('audio')
    if(this.props.playing){
      audio.play()
    }
  }

  componentDidUpdate(){
    console.log("updated!", this._audio.attributes)
    if(this.props.playing){
      this._audio.play()
    } else {
      this._audio.pause()
    }
  }


  render(){
    // console.log(this._audio.isPlaying)
    // console.log(self)
    // console.log("is the music playing?", this.props.playing)

    return(
      <div playing={this.props.playing} className="audio">
        <audio ref={(el) => {this._audio = el}} onTimeUpdate={(e) => this.props.handleChange(e)} hidden={this.props.hidden} src={this.props.src} controls />
      </div>
    )

  }

}

export default Audio;
