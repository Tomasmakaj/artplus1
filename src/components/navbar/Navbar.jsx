import React, { useState } from 'react'
import './Navbar.css'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import artSmall from '../../assets/artSmall.png'

const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    <div className='navbar'>
        <div className='container'>
            <img src={artSmall} className='navBarLogo' />
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li><a href='/home' >Home</a></li>
                <li><a href='/services' >Services</a></li>
                <li><a href='/projects' >Projects</a></li>
                <li><a href='/contact' >Contact</a></li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
            </div>
        </div>
    </div>
  )
}

export default Navbar