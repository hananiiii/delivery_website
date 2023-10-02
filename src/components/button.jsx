import React from 'react'

const button = ({ButtonText}) => {
  return (
    <div>
         <button className=' bg-gradient-to-r from-[#EA2C2D] to-[#EF8887] text-title_color rounded-lg   px-9 py-3 border-yelow font-medium font-font hover:duration-300 hover:shadow-sm  hover:transform hover:-translate-y-1  transition-transform duration-300 '>
        {ButtonText}
      </button>
    </div>
  )
}

export default button