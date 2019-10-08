import React from 'react'

class Audio extends React.Component{

  render(){
    console.log()
    return(
      <div className="audio">
        <audio onTimeUpdate={(e) => this.props.handleChange(e)} hidden={this.props.hidden} src={this.props.src} controls />
      </div>
    )
  }

}

export default Audio;
