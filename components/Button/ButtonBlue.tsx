import React from 'react'

interface Props {
    text:string;
    disabled?: boolean;
}


const ButtonBlue = ({text, disabled}:Props) => {
  return (
    <button className={`rounded-md px-2 sm:px-4 py-1 text-[15px] md:px-8 md:py-2.5 overflow-hidden group bg-blue-500
    relative text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={disabled}>
       <span className='relative'>{text}</span>
    </button>
  )
}

export default ButtonBlue