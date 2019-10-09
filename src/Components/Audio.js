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
    console.log("updated!", this.children)

  }

  render(){
    console.log()
    // console.log("is the music playing?", this.props.playing)

    return(
      <div playing={this.props.playing} className="audio">
        <audio onTimeUpdate={(e) => this.props.handleChange(e)} hidden={this.props.hidden} src={this.props.src} controls />
      </div>
    )

  }

}

export default Audio;
