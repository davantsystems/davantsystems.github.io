import React from "react";


const TimelapseVideo = ({videoId, title}: {videoId: string, title: string}) => {
    return (
        <div className="relative flex flex-col items-center justify-center max-h-screen bg-base-300">
            <iframe width="466" height="828" src={`https://www.youtube.com/embed/${videoId}`} title={`${title}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    );
};

export default TimelapseVideo;