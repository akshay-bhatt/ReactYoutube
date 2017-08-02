import React from "react";

// Comment for line 19
// Concept learnt string interpolation templet string in ES6
// url ="url" + "string"
// here we inject javascript variable

// url =`url ${string}` 

const VideoDetail = ({ video }) => {
// This if statement is used to get ride of uncaught undefined reference error
// video is null so video.id.videID will be referring to id property og null
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;

  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
