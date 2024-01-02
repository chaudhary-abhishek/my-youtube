import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({data}) => {
    //console.log(data);
  return (
    <div className='w-full my-4'>
    <Link to={"/watch?v="+data.id}>
   
        <div className='m-4'>
            <img className='rounded-xl w-full' alt='thumbnail' src={data.snippet.thumbnails.medium.url} />
        </div>
        <div className='m-4'>
        <p className='font-medium'>{data.snippet.title}</p>
        <p className='text-gray-600 font-semibold'>{data.snippet.channelTitle}</p>
        <p>{Math.ceil(data.statistics.viewCount/1000)}K views </p>
        </div>
      
   
    </Link>
    </div>
  )
}

export default VideoCard;