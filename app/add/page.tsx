import Navbar from '@components/Navbar'
import AddRecipe from '../../components/AddRecipe'
import React from 'react'
import Footer from '@components/Footer'
import ProtectedRoute from '@components/ProtectedRoute'


const Add: React.FC = () => {
  return (
    <>
    
    <Navbar />
    <div className='p-4'>
        <div className='bg-blue-400 text-2xl font-bold text-center py-1 text-white rounded-xl'>
            Add Your Recipe
        </div>
        <ProtectedRoute>
        <AddRecipe />
        </ProtectedRoute>
       
    </div>
    <Footer />
    
    </>
  )
}

export default Add