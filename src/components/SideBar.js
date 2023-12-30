import React from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);
  console.log(isMenuOpen);
  if(!isMenuOpen) return null;  // early return
  return (
    <div className='p-4  border shadow-2xl'>
      <ul className='mx-4'>
      <li className='mb-2'>Music</li>
        <li className='mb-2'>Movies</li>
        <li className='mb-2'>Gaming</li>
        <li className='mb-2'>News</li>
        <li className='mb-2'>Music</li>
        <li className='mb-2 font-bold text-lg'>Explore</li>
        <li className='mb-2'>Gaming</li>
        <li className='mb-2'>News</li>
        <li className='mb-2'>Music</li>
        <li className='mb-2'>Movies</li>
        <li className='mb-2'>Gaming</li>
        <li className='mb-2'>News</li>
        <li className='mb-2'>Music</li>
        
      </ul>
    </div>
  )
}

export default SideBar;