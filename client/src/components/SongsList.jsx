import React from 'react'
import Song from './Song'

class SongList extends React.Component {

  render(){
    const songNodes = this.props.data.map((song, index) => {
      return (
        <Song artist={ song[index]['im:artist'].label } key={index}>
        </Song>
      )
    })

    return (
      <div className="song-list">
        {songNodes}
      </div>
    )
  }

}

export default SongList