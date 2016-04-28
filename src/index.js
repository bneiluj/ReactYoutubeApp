// Imports
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

const API_YOUTUBE_KEY = "AIzaSyC0I26vauBnOsw23tvtsF4BfxY7CAWfye8";

// create a new component
// to produce some html
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('Artificial Intelligence;')
  };
  videoSearch (term) {
    //to display videos immediately after the instance of the App
    // Fetch data
    YTSearch({key: API_YOUTUBE_KEY, term: term}, (videos) => {
        console.log("Youtube data: ", videos);
        // this.setState({ videos: videos });
        // we can condanse this because the data is using the same name videos
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
    });
  }
  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term)
    }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    )
  };
}
// Take this components generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
