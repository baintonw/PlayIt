import React from 'react'

class Audio extends React.Component{
  render(){
    return(
      <div className="audio" onClick={this.props.handleClick.bind(this)} >
        <audio hidden={this.props.hidden} src={this.props.src} controls />
      </div>
    )
  }

}

export default Audio;
