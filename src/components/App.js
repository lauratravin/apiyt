import React from "react";
import SearchBar from "./SearchBar";
import './App.css'
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";


class App extends React.Component {

  state = {videos: [],
           selectedVideo: null}

  componentDidMount() {
    this.onTermSubmit('cats');
  }

  onTermSubmit = async term => { //this is concatenate with youtube params
   const response = await  youtube.get('/search',  { params: { q: term} }  );
//  console.log(response) 
   this.setState({videos: response.data.items, selectedVideo: response.data.items[0]})
   
  }


  onVideoSelect = videoIdselected => {
    // console.log(videoIdselected)
    this.setState( {selectedVideo: videoIdselected })
  }

  

  render(){
    const detailvideo = this.state.selectedVideo
  
    return(
       <div className="ui container">
         
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <div className="ui grid">
              <div className="ui row">
                <div className="eleven wide column">
                    {/* { detailvideo
                      ?  <VideoDetail video = { this.state.selectedVideo } /> : " "  } */}
                       <VideoDetail video = { this.state.selectedVideo } />
                </div>
                <div className="five wide column">                
                  <VideoList onVideoSelect={this.onVideoSelect}  videos={this.state.videos} />
                </div>
              </div>
          </div>
       </div>
    )
  }

}
export default App;