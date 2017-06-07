import React from 'react'

class Song extends React.Component {

  render() {
    return (
      <div className="song">
        <h4 className="song-title">
          { this.props.artist }
        </h4>
        <br/>
        <h4 className="song-title">
          { this.props.title }
        </h4>
        <h4 className="song-title">
          { this.props.position }
        </h4>
        
      </div>
    )
  }
}

export default Song