import React from 'react'
import { useSearchParams } from 'react-router-dom';

const Watch = () => {
  const [searchParams] = useSearchParams();
    //console.log(searchParams.get("v"));
  return (
    <div>
        <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+searchParams.get('v')+"?si=7wNWUDnODkAfXkfO" }title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default Watch