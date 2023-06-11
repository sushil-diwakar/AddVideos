import React,{useState} from 'react'

const AddVideo = ({addVideo}) => {
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
        addVideo(video);
        setVideo(initialDataState);
        alert("Video Details are added")
    }
    return (
        <form onSubmit={handleAdd}>
            <div className="mb-3">
                <input type="text" name="videoTitle" className="form-control" placeholder="Enter Video Title" onChange={handleInputs} value={video.videoTitle} required/>
            </div>
            <div className="mb-3">
                <textarea className="form-control" name="videoDesc" rows="3" placeholder="Enter Video Description" onChange={handleInputs} value={video.videoDesc} required></textarea>
            </div>
            <div className="mb-3">
                <button className="btn btn-primary">Add</button>
            </div>
        </form>
    )
}

export default AddVideo