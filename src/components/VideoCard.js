import React from 'react'

const VideoCard = ({data}) => {
    //console.log(data);
  return (
    <div className='w-1/5 m-3'>
        <div className=''>
            <img className='rounded-xl' alt='thumbnail' src={data.snippet.thumbnails.medium.url} />
        </div>
        <p className='font-medium'>{data.snippet.title}</p>
        <p className='text-gray-600 font-semibold'>{data.snippet.channelTitle}</p>
        <p>{Math.ceil(data.statistics.viewCount/1000)}K views </p>
    </div>
  )
}

export default VideoCard;