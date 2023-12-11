import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] flex flex-col mt-[-96px] w-full h-screen mx-auto text-center justify-center'>
                <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
                <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold md:py-4'>GROW WITH DATA</h1>
                <div className='flex items-center justify-center space-x-2 md:text-4xl sm:text-3xl text-xl font-semibold p-2'>
                    <p>Fast, flexible financing for</p>
                    <Typed strings={['BTB', 'BTC', 'SASS']} typeSpeed={120} backSpeed={140} loop/>
                </div>
                <p className='text-lg md:text-xl text-gray-500 p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus obcaecati necessitatibus magni laboriosam maiores soluta sint. Nobis mollitia eaque itaque!</p>
                <button className='bg-[#00df9a] text-[#000300] font-semibold w-28 md:w-36 lg:w-48 rounded-md my-6 mx-auto py-2'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero