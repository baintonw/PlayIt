import React from 'react'
import '../Player.css'

function Player(props){

  let progress;
  progress = props.progress

  function renderPlayButton(){
    if(props.playing  && props.pause ){
      return "fa fa-play"
    } else if(props.playing){
      return "fa fa-pause"
    } else {
      return "fa fa-play"
    }

  }
  console.log("elapsed", props.elapsed)

  return(
    <div className="player" >
      <div className="controls">
        <a href="nytimes.com"><i className="fa fa-chevron-left"></i></a>
        <a onClick={(e) => props.play(e)} href="nytimes.com"><i className={renderPlayButton()} area-hidden="true"></i></a>
        <a href="nytimes.com"><i className="fa fa-chevron-right"></i></a>
      </div>
      <div onClick={(e) => props.changeProgress(e)} className="progress">
        <div className="bar">
          <div>
            <div style={{width: `${props.elapsed * 100}%`}} className="elapsed"></div>
          </div>
        </div>
      </div>
      <div className="timer">
        {`${Math.floor(props.elapsed * props.duration)} / ${Math.floor(props.duration)}`}
      </div>
    </div>
  )
}

export default Player
