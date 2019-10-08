import React from 'react'
import '../Player.css'

function Player(props){
  return(
    <div className="player" onClick={props.handleClick.bind(this)}>
      <div className="controls">
        <a href="nytimes.com"><i className="fa fa-chevron-left"></i></a>
        <a href="nytimes.com"><i className="fa fa-play" area-hidden="true"></i></a>
        <a href="nytimes.com"><i className="fa fa-chevron-right"></i></a>
      </div>
      <div className="progress">
        <div className="bar">
          <div>
            <div className="elapsed"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Player
