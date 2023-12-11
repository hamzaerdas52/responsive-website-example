import React from 'react'

const NavbarList = () => {
    return (
        <ul className={"hidden md:flex"} >
            <li className='navbar-list-item'>Home</li>
            <li className='navbar-list-item'>Company</li>
            <li className='navbar-list-item'>Resources</li>
            <li className='navbar-list-item'>About</li>
            <li className='navbar-list-item'>Contact</li>
        </ul>
    )
}

export default NavbarList