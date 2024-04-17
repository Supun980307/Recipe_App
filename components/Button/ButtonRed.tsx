import React from 'react'

interface Props {
    text:string;
}

const ButtonRed = ({text}:Props) => {
  return (
    <button className='rounded-md px-2 sm:px-4 py-1 text-[15px] md:px-8 md:py-2.5 overflow-hidden group bg-red-500
     relative text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400'>
        <span className='relative'>{text}</span>
     </button>
  )
}

export default ButtonRed