import './App.css';
import { useState } from 'react';
import jsonData from './data.json';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';


function App() {
  const [videos,setVideos] = useState(jsonData);
  const [editableVideo,setEditableVideo] = useState(null);
  
    const addVideo=(video)=>{
        setVideos([...videos,{...video,id:videos.length+1}]);
    }
    const deleteVideo=(id)=>{
      setVideos(videos.filter(x=>x!==id));
    }
    const editVideo=(id)=>{
      setEditableVideo(videos.find(x=>x===id))
    }
    
    const updateVideo=(video)=>{
      const index = videos.findIndex(x=>x.id===video.id);
      const updatedVideoList = [...videos];
      updatedVideoList.splice(index,1,video);
      setVideos(updatedVideoList);
      setEditableVideo(null)
    }
  return (
    <>
    <h1 className="text-center">Test App</h1>
    <div className="container">
      <AddVideo addVideo={addVideo} editableVideo={editableVideo} updateVideo={updateVideo}/>
      <VideoList videos={videos} deleteVideo={deleteVideo} editVideo={editVideo}/>
    </div>
    
    </>
  );
}

export default App;
