import React,{useEffect, useState} from 'react'

const AddVideo = ({addVideo,editableVideo,updateVideo}) => {
    let initialDataState = {
        videoTitle:"",
        videoDesc:"",
        videoLength:100
    }
    const[video,setVideo] = useState(initialDataState);

    let name,value;
    const handleInputs = (event)=>{
        event.stopPropagation();
        name = event.target.name;
        value = event.target.value;
        setVideo({...video, [name]:value});
    }

    const handleAdd=(e)=>{
        e.stopPropagation();
        e.preventDefault();
        if(editableVideo){
            updateVideo(video);
            alert("Video Details are updated");
        }
        else{
            addVideo(video);
            alert("Video Details are added");
        }
        setVideo(initialDataState);
        
    }

    useEffect(()=>{
        if(editableVideo)
            setVideo(editableVideo);
    },[editableVideo]);

    return (
        <form onSubmit={handleAdd}>
            <div className="mb-3">
                <input type="text" name="videoTitle" className="form-control" placeholder="Enter Video Title" onChange={handleInputs} value={video.videoTitle} required/>
            </div>
            <div className="mb-3">
                <textarea className="form-control" name="videoDesc" rows="3" placeholder="Enter Video Description" onChange={handleInputs} value={video.videoDesc} required></textarea>
            </div>
            <div className="mb-3">
                <button className={`btn btn-${editableVideo?'success':'primary'}`}>{editableVideo?'Edit':'Add'} Video</button>
            </div>
        </form>
    )
}

export default AddVideo