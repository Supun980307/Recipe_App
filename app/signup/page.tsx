'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../public/logo.png';
import ButtonBlue from '../../components/Button/ButtonBlue';

const Signup: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
   

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (!response.ok) {
                throw new Error('Failed to create user');
            }
    
            // Clear all entered data
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.error('Error creating user:', error);
            // Handle error as needed
        }
    };
    // Function to validate if passwords match
    const passwordsMatch = formData.password === formData.confirmPassword;

    return (
        <div className='p-4 max-w-2xl mx-auto border-large rounded-xl items-center mt-10'>
            <div className='w-24 sm:w-32 h-14 flex items-center mx-auto my-6'>
          <Image src={Logo} alt="Logo" className='h-16' />
        </div>
        <div>
          <h1 className='text-3xl mb-8 font-bold text-center'>Create Your Account</h1>
        </div>
        <div className='text-center'>
            Already A Member? <a href='/signin' className='text-blue-500 hover:text-blue-600 hover:underline'>Sign In</a>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto mt-8">
            <div className="mb-4">
                <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">First Name:</label>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>

            <div className="mb-4">
                <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">Last Name:</label>
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>

            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>

            <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">Confirm Password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>

            <ButtonBlue text="Create Account" disabled={!passwordsMatch} />
        </form>
        </div>
    )
}

export default Signup;
