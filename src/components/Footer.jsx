import React from 'react'
import Logo from './Logo'
import icons from '../assets/icons'

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-6 grid lg:grid-cols-3 gap-8 text-gray-400'>
            <div>
                <Logo />
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae delectus maiores porro animi corrupti inventore doloribus consequatur ullam libero necessitatibus.</p>
                <div className='flex justify-between my-4'>
                    <icons.facebook size={30} />
                    <icons.instagram size={30} />
                    <icons.x size={30} />
                    <icons.github size={30} />
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6 mx-4'>
                <div>
                    <h6 className='font-medium text-gray-500'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'>Analytics</li>
                        <li className='py-2 text-sm'>Marketing</li>
                        <li className='py-2 text-sm'>Commerces</li>
                        <li className='py-2 text-sm'>Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-500'>Support</h6>
                    <ul>
                        <li className='py-2 text-sm'>Pricing</li>
                        <li className='py-2 text-sm'>Documentation</li>
                        <li className='py-2 text-sm'>Guides</li>
                        <li className='py-2 text-sm'>API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-500'>Company</h6>
                    <ul>
                        <li className='py-2 text-sm'>About</li>
                        <li className='py-2 text-sm'>Blog</li>
                        <li className='py-2 text-sm'>Jobs</li>
                        <li className='py-2 text-sm'>Press</li>
                        <li className='py-2 text-sm'>Careers</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-500'>Legal</h6>
                    <ul>
                        <li className='py-2 text-sm'>Claim</li>
                        <li className='py-2 text-sm'>Policy</li>
                        <li className='py-2 text-sm'>Terms</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Footer