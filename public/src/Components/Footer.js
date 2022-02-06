import React from 'react'
import "../Styles/Footer.css"
import { HomeSocial } from './HomeSocial'

function Footer() {
    return (
        <footer>
            <p className='footer_title'>Rishika Jain</p>
            <div className='footer_social'>
            {
             HomeSocial &&
                 HomeSocial.map((social) => (
                 <a href={social.iconLink} key={social.id}>
                     {social.iconName}
                 </a>
            ))
            }
            </div>
            <p className='copy_right'>&#169; 2022</p>
        </footer>
    )
}

export {Footer}
