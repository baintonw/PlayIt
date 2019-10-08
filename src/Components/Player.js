import React from 'react'
import '../Player.css'

function Player(props){
  console.log(Math.floor(props.elapsed * 100))
  let elapsed;
  elapsed = props.elapsed
  return(
    <div className="player" >
      <div className="controls">
        <a href="nytimes.com"><i className="fa fa-chevron-left"></i></a>
        <a href="nytimes.com"><i className="fa fa-play" area-hidden="true"></i></a>
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
