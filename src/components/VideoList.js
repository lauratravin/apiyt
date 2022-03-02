import React from "react";
import VideoItem from "./VideoItem";


// const VideoList = (props) => { //destructuring below
const VideoList = ({ videos , onVideoSelect}) => {
           
          const renderedList =  videos.map( v => 
               {return  <VideoItem onVideoSelect={onVideoSelect} key={v.id.videoId} video={ v }/>}
                    )   
          
  return <div  className="ui relaxed divided list" >{renderedList}</div>
};

export default VideoList;