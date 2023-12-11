import React from 'react'

const Newsletter = () => {
    return (
        <div className='bg-black text-white w-full px-6 py-12'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 lg:mx-6 my-4'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row justify-between items-center'>
                        <input className='p-2 rounded-md flex w-full text-black' type="email" placeholder='Enter your email' />
                        <button className='bg-[#00df9a] text-[#000300] font-medium w-32 md:w-40 lg:w-52 rounded-md my-6 mx-4 py-2'>Notify Me</button>
                        
                    </div>
                    <p>We care bout the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy.</span></p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter