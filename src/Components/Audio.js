import React from 'react'

import ReactDOM from "react-dom";

class Audio extends React.Component{

  // componentDidUpdate(){
  //   // this._audio.currentTime = (this.props.elapsed * this._audio.duration)
  //
  //
  // }

  render(){
    console.log("Pause?", this.props.pause)
    return(
      <div className="audio">
        <audio id="button" ref={(el) => {this._audio = el}} onTimeUpdate={(e) => this.props.handleChange(e)} hidden={this.props.hidden} src={this.props.src} controls />
      </div>
    )

    // this.setTime()
  }

}

export default Audio;
