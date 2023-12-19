import React from 'react'
import './footer.css'
import {
    ArrowForwardIos,
    Facebook,
    Twitter,
    LinkedIn,
    Instagram,
    YouTube,
    CheckCircleOutline
} from '@mui/icons-material'

export default function Footer() {
  return (
    <div className="footer">
        <div className="fContainer">
            <div className="fbox">
                <h1>Corporate information</h1>
                <span>Cinnamon Hotels & Resorts</span>
                <span>John Keells Group</span>
            </div>

            <div className="fbox">
                <h1>News and Awards</h1>
                <span>News</span>
                <span>Awards</span>
            </div>

            <div className="fbox">
                <h1>Data Privacy & Security Policy</h1>
                <span>Terms & conditions</span>
                <span>Privacy statement</span>
            </div>

            <div className="fbox">
                <h1>Blogs</h1>
                <span>Cinnamon Ublog</span>
            </div>

            <div className="fbox">
                <h1>Corporate Governance</h1>
                <span>CSR</span>
            </div>

            <div className="fbox">
                <h1>Get in Touch</h1>
                <span>info@cinnamonhotels.com</span>
                <span>Hotel Contact Information</span>
            </div>

            <div className="fbox">
                <h1>Careers</h1>
                <span>Careers</span>
            </div>

            <div className="fbox">
                <h1>Follow Us</h1>
                <div className="icons">
                    <Facebook className='icon'/>
                    <Twitter className='icon'/>
                    <Instagram className='icon'/>
                    <LinkedIn className='icon'/>
                    <YouTube className='icon'/>
                </div>
            </div>
            
        </div>

        <div className="fbottom">
            <h1>Get Cinnamon in your inbox</h1>
            <div className="sendMail">
                <input type="text" placeholder='Email Address' />
                <ArrowForwardIos className='arrow'/>
            </div>
            <div className="tc">
                <input type="checkbox" />
                <p>By Checking this box, I consent to the processing of my Personal Data by Cinnamon for the purpose and within the Conditions set out in this form and the <b>Cinnamon Data Protection Policy.</b></p>
            </div>
        </div>

    </div>
  )
}
