import React from 'react'

class Song extends React.Component {

  render() {
    return (
      <div className="song">
        <h4 className="song-title">
          { this.props.artist }
        </h4>
        
      </div>
    )
  }
}

export default Song