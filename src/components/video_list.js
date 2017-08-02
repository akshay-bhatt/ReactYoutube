//import React, { Component } from "react";
import React from "react";
import VideoListItem from "./video_list_item";

// VERY IMP NOTE
// Initial approach class based component
// Use class based component only when state is required. 
// VideoList is not saving any state but just using video property attributes as props.
// So no need for class based component rather make it functional component


/*
class VideoListItem extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos : [], 
      listOfVideos : 0
    };
  }

  render(){
  
  return (
    <div>
     <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
    </div>
  );
  }


*/

const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
