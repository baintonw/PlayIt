import React from 'react'
import '../Player.css'

function Player(props){
  return(
    <div className="player">
      <div className="controls">
        <a href="javascript:void();"><i className="fa fa-chevron-left"></i></a>
        <a href="javascript:void();"><i className="fa fa-play" area-hidden="true"></i></a>
        <a href="javascript:void();"><i className="fa fa-chevron-right"></i></a>
      </div>
      <div className="progress">
        <div className="bar">
          <div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Player
