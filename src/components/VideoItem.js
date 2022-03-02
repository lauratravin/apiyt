import { isRefObject } from "@fluentui/react-component-ref";
import React from "react";
import './App.css'

const VideoItem = ({video,onVideoSelect}) => {

    // console.log(video)
    const url = "https://www.youtube.com/embed/" + video.id.videoId; // `https://www.youtube.com/embed/${video.id.videoId}`

        //   console.log(video)
    return    <div onClick={() => onVideoSelect(video)} className="item video-item">
                                
                                        
                                        {/* <div className="embed">
                                        
                                                <iframe   src={url} ></iframe>
                                        </div> */}

                                        <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.default.url} />
                                        <div className="content">
                                            <div className="header">{video.snippet.title}</div>
                                            
                                        </div>
             </div>                                               
          
}

export default VideoItem;


