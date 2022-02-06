import React from 'react'
import {FaCheck} from "react-icons/fa"
import "../Styles/Alert.css"

function Alert() {
    return (
        <div className='alert' id="alert">
            <div className='iconBox'><FaCheck/></div>
            <p className='alertText'>Your message sent successfully</p>
        </div>
    )
}

export {Alert}