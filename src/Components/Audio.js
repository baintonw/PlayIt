import React from 'react'

import ReactDOM from "react-dom";

class Audio extends React.Component{


  state = {
    playtime: 0
  }

  componentDidUpdate(prevProps, prevState){
    console.log("prevProps", prevProps.elapsed, "props", this.props.elapsed)
    if((this.props.elapsed * this._audio.duration) !== (prevProps.elapsed * this._audio.duration)){
      let playtime = (this.props.elapsed * this._audio.duration)
      this._audio.currentTime = playtime
    }

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
    console.log("playtime", this.state.playtime)
    return(
      <div className="audio">
        <audio id="button" onPause={(e) => this.props.setElapsedWhenPaused(e)} ref={(el) => {this._audio = el}} hidden={this.props.hidden} src={this.props.src} controls />
      </div>
    )

  }

}

export default Audio;
