import React from 'react'
import SideBar from './SideBar'

import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='grid grid-flow-col'>
      <div className='col-span-2'>
      <SideBar />
      </div>
      <div className='col-span-10 px-12 mx-auto my-4'>
      <Outlet />
      </div>
    
    
    </div>
   
  )
}

export default Body