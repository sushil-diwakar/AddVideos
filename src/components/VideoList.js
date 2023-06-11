import React from 'react'

const VideoList = ({ videos }) => {
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">videoTitle</th>
                        <th scope="col">videoDesc</th>
                        <th scope="col">videoLength</th>
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
                            </tr>
                        )

                    })}
                </tbody>
            </table>

        </>
    )
}

export default VideoList