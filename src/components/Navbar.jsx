import React, { useState } from 'react'
import icons from '../assets/icons'
import NavbarList from './NavbarList'
import Logo from './Logo'
import MenuList from './MenuList'

const Navbar = () => {

    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='flex items-center justify-between h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <Logo />
            <NavbarList />
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <icons.close size={24} /> : <icons.menu size={24} />}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[50%] border-r border-r-gray-700 h-full bg-[#000300] ease-in-out duration-300' : 'fixed top-0 left-[-100%] ease-in-out duration-300'}>
                <Logo className={"m-4"} />
                <MenuList />
            </div>
        </div>
    )
}

export default Navbar