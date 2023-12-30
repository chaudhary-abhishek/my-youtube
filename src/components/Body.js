import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'

const Body = () => {
  return (
    <div className='flex'>
      <div className='w-1/5'>
      <SideBar />
      </div>
      <div className='w-4/5'>
      <MainContainer />
      </div>
    
    
    </div>
   
  )
}

export default Body