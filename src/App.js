import React, { useState } from "react";
import Youtube from './utils/youtube'
import VideoList from "./components/VideoList"
import SearchBar from "./components/SearchBar";



const App = () => {
  const [videos, setVideos] = useState([])
  
  const onTermSubmit = async (term) => {
    const response = await Youtube.get('/search', {
      params: {
        q: term
      }
    })
  
  setVideos(response.data.items)
  }

  return (
    <div className="ui container">
    <SearchBar onTermSubmit={onTermSubmit} />
      <div className="ui grid" >
        <div className="ui row">
        <div className="eleven wide column">
        
        </div>
        <div className="five wide column">
          <VideoList videos={videos}/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default App;
