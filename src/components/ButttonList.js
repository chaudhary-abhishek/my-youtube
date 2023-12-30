import React from 'react'

const buttons = ["All","Entertainment","Music","Technology","Mixes","Spirituality","Gaming","JavaScript"];
const ButttonList = () => {
  return (
    <div>
      {
        buttons.map((category)=><button className='px-4 py-1 m-2 rounded-lg font-medium text-sm bg-gray-200'>{category}</button>)
      }
    </div>
  )
}

export default ButttonList