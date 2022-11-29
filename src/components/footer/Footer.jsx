import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import './Footer.css'

const Footer = () => {

    return (

        <div id='footer'className='footer'>
            <div className='col created-by'>
                <div className='col'>
                    <a href="https://www.instagram.com/artplus1inc/" target="_blank"><BsInstagram className='icon' /></a>
                </div>
            </div>
            <div>
                <div className='col'>
                    <p>Copyright © 2022 Art+1 Inc. | All Rights Reserved | 150 W 28th St, Suite 302 New York, NY 10001 | </p>
                    <p> 150 W 28th St, Suite 302 New York, NY 10001 </p>
                    <p>646-585-7162</p>
                </div>
            </div>
        </div>
    )
}

export default Footer