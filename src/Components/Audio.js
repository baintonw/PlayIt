import React from 'react'

import ReactDOM from "react-dom";

class Audio extends React.Component{






  componentDidUpdate(prevProps, prevState){
    // console.log("update duration", this._audio.duration)
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

  render(){
    return(
      <div className="audio">
        <audio id="button" onLoadedData={(e) => this.props.setDuration(e, this._audio.duration)} onPause={(e) => this.props.setElapsedWhenPaused(e)} ref={(el) => {this._audio = el}} hidden={this.props.hidden} src={this.props.src} controls />
      </div>
    )

  }

}

export default Audio;
