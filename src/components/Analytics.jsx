import React from 'react'
import images from '../assets/images/images'

const Analytics = () => {
    return (
        <div className='bg-white w-full px-4 py-16'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[400px] mx-auto my-4' src={images.laptop} alt="" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold text-sm md:text-md lg:text-lg'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                    <p className='text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus in eligendi voluptatibus sint hic officia. Quas, autem possimus quis qui nemo ipsa harum. Minus, animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, odit.</p>
                    <button className='text-[#00df9a] font-semibold bg-[#000300] w-28 md:w-36 lg:w-48 rounded-md my-8 mx-auto py-2 md:mx-2'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics