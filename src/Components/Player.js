import React from 'react'
import '../Player.css'

function Player(props){
  // console.log(Math.floor(props.elapsed * 100))
  console.log(props.playing)
  let elapsed;
  elapsed = props.elapsed
  return(
    <div className="player" >
      <div className="controls">
        <a href="nytimes.com"><i className="fa fa-chevron-left"></i></a>
        <a onClick={(e) => props.play(e)} href="nytimes.com"><i className={props.playing ? "fa fa-pause" : "fa fa-play"} area-hidden="true"></i></a>
        <a href="nytimes.com"><i className="fa fa-chevron-right"></i></a>
      </div>
      <div className="progress">
        <div className="bar">
          <div>
            <div style={{width: `${props.elapsed * 100}%`}} className="elapsed"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Player
