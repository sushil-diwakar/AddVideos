import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import jsonData from './data.json';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';



function App() {
  const [mode,setMode] = useState('light');
  const [videos,setVideos] = useState(jsonData);
  const [editableVideo,setEditableVideo] = useState(null);
  
    //Toggle Mode
    const toggleMode=()=>{
      if(mode==='light'){
        setMode('dark')
        document.body.style.backgroundColor="#635985";
      }
      else{
        setMode('light')
        document.body.style.backgroundColor="white";
      }
    }
    const addVideo=(video)=>{
        setVideos([...videos,{...video,id:videos.length+1}]);
    }
    const deleteVideo=(id)=>{
      setVideos(videos.filter(x=>x!==id));
    }
    const editVideo=(id)=>{
      setEditableVideo(videos.find(x=>x===id));
    }
    
    const updateVideo=(video)=>{
      const index = videos.findIndex(x=>x.id===video.id);
      const updatedVideoList = [...videos];
      updatedVideoList.splice(index,1,video);
      setVideos(updatedVideoList);
      setEditableVideo(null);
    }
  return (
    <>
    <Router>
      <Header title="Test App" mode={mode} toggleMode={toggleMode}/>
      <Routes>
          <Route exact path="/" element={
          <>
          <div className="container">
          <h1 className="text-center" style={{color:`${mode==='dark'?'white':'black'}`}}>Test App</h1>
          <AddVideo addVideo={addVideo} editableVideo={editableVideo} updateVideo={updateVideo} mode={mode}/> <VideoList videos={videos} deleteVideo={deleteVideo} editVideo={editVideo} mode={mode}/>
          </div>
          </>}/>
          
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/contact" element={<Contact mode={mode}/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
