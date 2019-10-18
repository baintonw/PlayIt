import React from 'react'
import '../Player.css'

class Player extends React.Component {

  renderPlayButton = () => {
    if(this.props.playing  && this.props.pause ){
      return "fa fa-play"
    } else if(this.props.playing){
      return "fa fa-pause"
    } else {
      return "fa fa-play"
    }

  }

  formatTime = () => {
    return `${Math.floor(this.props.currentTime)} / ${Math.floor(this.props.duration)}`
  }





  render(){
    console.log("current time!", this.props.currentTime)
    return(
      <div className="player" >
        <div className="controls">
          <a href="nytimes.com"><i className="fa fa-chevron-left"></i></a>
          <a onClick={(e) => this.props.play(e)} href="nytimes.com"><i className={this.renderPlayButton()} area-hidden="true"></i></a>
          <a href="nytimes.com"><i className="fa fa-chevron-right"></i></a>
        </div>
        <div onClick={(e) => this.props.changeProgress(e)} className="progress">
          <div className="bar">
            <div>
              <div style={{width: `${(this.props.currentTime / this.props.duration) * 100}%`}} className="elapsed"></div>
            </div>
          </div>
        </div>
        <div className="timer">
          {this.formatTime()}
        </div>
      </div>
    )
  }

}

export default Player
