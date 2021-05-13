import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Please, use the field above to search for some videos!</div>;
  }

  const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSource} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
