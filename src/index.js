import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YoutubeAPISearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import LearnWithFun from "./components/learn_with_fun";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
const API_KEY = "AIzaSyAccPMmpQpqck7msi4F-bxLiHHvYyZ_IAk";

class App extends Component {

  /*
  //Initial constructor plan with just mainting video in state.
  // Selection Problem faced

constructor(props){
    super(props);
    //intial start state with bank and then input it with default state values when view is rendered
    this.state = {videos: [] };
    YouTubeSearchVideo({key: YouTubeVideo_API_KEY, term: 'surfboards'}, (videos) =>{
      this.setState ({videos});
      // Whn using ES6 it will be resolve in this.setState({videos: videos}); only when key and property have same name
    });
  }
  */

  // maintaing video as well as selected video in state to enable change in state value for selection
  // change in state will cause the view to render and new selected video vil be selected. 
  // Comon Comon :p
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("Sing");
  }

  videoSearch(term) {
    YoutubeAPISearch({ key: API_KEY, term: term }, videos => {
// THE MOST IMP CONCEPT OF STATE 
// use this.state only only only only in constructor 
// If not constructor use this.setState()
// This will notify that by calling the function it just not change the value but will notify so that it remembers state is changed 
// and that view needs to be rendered

      this.setState({
        videos: videos,
        selectedVideo: videos[0] // this will select the 1st video from video array to provide intial load on view first
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
        <LearnWithFun/>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
