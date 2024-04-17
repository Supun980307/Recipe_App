import React from 'react'
import { IoPaperPlaneSharp } from "react-icons/io5";


const CommentRecipe = () => {
  return (
    <div className='flex'>
        <input type="text" id="comment" placeholder='Comment...' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        <button className='ml-2 bg-blue-500 rounded-lg px-2'><IoPaperPlaneSharp /></button>
    </div>
  )
}

export default CommentRecipe