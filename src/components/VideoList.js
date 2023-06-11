import React from 'react'

const VideoList = ({ videos, deleteVideo, editVideo,mode }) => {
    
    return (
        <>
            <table className="table" style={{color:`${mode==='dark'?'white':'black'}`}}>
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">videoTitle</th>
                        <th scope="col">videoDesc</th>
                        <th scope="col">videoLength</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {videos.map((x) => {
                        return (
                            <tr key={x.id}>
                                <td>{x.id}</td>
                                <td>{x.videoTitle}</td>
                                <td>{x.videoDesc}</td>
                                <td>{x.videoLength}</td>
                                <td><button className="btn btn-success btn-sm" onClick={()=>editVideo(x)}>Edit</button></td>
                                <td><button className="btn btn-danger btn-sm" onClick={()=>deleteVideo(x)}>Delete</button></td>
                            </tr>
                        )

                    })}
                </tbody>
            </table>

        </>
    )
}

export default VideoList