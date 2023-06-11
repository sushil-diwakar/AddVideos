import './App.css';
import { useState } from 'react';
import jsonData from './data.json';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';


function App() {
  const [videos,setVideos] = useState(jsonData);
  
    const addVideo=(video)=>{
        setVideos([...videos,{...video,id:videos.length+1}]);
    }
    const deleteVideo=(id)=>{
      setVideos(videos.filter(x=>x!==id));
    }
    
  return (
    <>
    <h1 className="text-center">Test App</h1>
    <div className="container">
      <AddVideo addVideo={addVideo} />
      <VideoList videos={videos} deleteVideo={deleteVideo}/>
    </div>
    </>
  );
}

export default App;
