import React from 'react'
import './navbar.css'
import {Person, Language} from '@mui/icons-material'

export default function Navbar() {
  return (
    <div className="container">
        <div className="navbarLeft">
                <img src="/assets/shangrilaLogo.png" alt="" className="navbarLogo"/>
            <div className="logoName">
                SHANGRI-LA
            </div>
        </div>
        <div className="navbarRight">
            <div className="navbarLinks">
                <div className="link">
                    <div className="icon"><Person/></div>
                    <span>Sign In</span>
                </div>
                <div className="link">
                    <span>Join Now</span>
                </div>
                <div className="link">
                    <span>Find Reservation</span>
                </div>
                <div className="link">
                <div className="icon"><Language/></div>
                    <span>English</span>
                </div>
                <div className="link">
                    <span>LKR</span>
                </div>
            </div>
        </div>
    </div>
  )
}
