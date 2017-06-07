import React from 'react';
import Header from '../components/Header';
import SongsList from '../components/SongsList';

class CountryContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {songs: []};
  }

  render(){
    return (
      <div>
        <Header title="UK Top 20"/>
        <SongsList data={this.state.songs}/>
      </div>
    );
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();
    request.open('GET', url);
    
    request.onload = () => {
      if (request.status === 200) {
        const jsonString = request.responseText;
        const songs = JSON.parse(jsonString);
        this.setState({ 
          songs: [songs.feed.entry] 
        });
      }
    }
    
    request.send();
  }
}

export default CountryContainer;