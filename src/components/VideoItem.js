import React from 'react'


const VideoItem = ({video}) => {
return (
    <div className="item video-item">
        <div className="ui image" src={video.snippet.thumbnails.medium.url} alt="video.snippet.title">
        <div className="content">
        <div className="header">
        {video.snippet.title}
        </div>
        </div>
        </div>
    
    </div>
 )   
}

export default VideoItem