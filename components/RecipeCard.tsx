import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface propsType {
    category: string;
    img: string;
    title: string;
    Description: string;
    detail: string;
}

const RecipeCard: React.FC<propsType> = ({category, img, title, Description, detail,}) => {
  return (
    <Link href="/view">
    <div className='p-4 mx-8 border-large hover:bg-slate-100 rounded-xl max-w-[400px]'>
        

        <div>
            <Image className='w-full h-auto rounded-xl'
            src={img}
            width={200}
            height={300}
            alt={title}
            />
        </div>
        <div className=''>
        <div className='flex gap-2 mt-3'>
          <div className='font-semibold'>Category:</div>
        <div className='text-blue-900 font-medium'>{category}</div>
        </div>

        <div className=''>
          <div className='flex gap-2 mt-3'>
            <div className='font-semibold'>Name:</div>
            <h2 className='text-blue-900 font-medium'>{title}</h2>
          </div>
            <p className='text-gray-700 font-normal'>{Description}</p>
            <p className='text-red-500 font-light'>{detail}</p>
        </div>
        </div>
    </div>
    </Link>
    
  )
}

export default RecipeCard