import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constant';
import VideoCard from './VideoCard';

const VideoContainer = () => {
  const [videoList, setVideoList] = useState([]);
  useEffect(()=>{
    getVideoList();
  },[]);

  const getVideoList = async()=>{
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    //console.log(json.items);
    setVideoList(json.items);
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
      {
        videoList.map((video)=><VideoCard key={video.id} data={video} />)
      }
      {/* <VideoCard data={videoList[1]} /> */}
    </div>
  )
}

export default VideoContainer