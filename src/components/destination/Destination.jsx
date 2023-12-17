import React from 'react'
import './destination.css'
import {KeyboardArrowDown} from '@mui/icons-material'

export default function Destination() {
  return (
    <div className="destination">
        <div className="container">
            <div className="top">
                <span>Our Destinations</span>
            </div>
            <div className="middle">
                <span>Cinnamon Dhonveli Maldives</span>
                <KeyboardArrowDown/>

            </div>
            <div className="bottom">
                <div className="left">
                    <img src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/media/Dhonveli-main-brand-site-DJI-0179-715x550px-301023.jpg" alt="" />
                </div>
                <div className="right">
                    <h2>Cinnamon Dhonveli Maldives</h2>
                    <p>Feel an irrepressible wave of excitement as you have the best surfing experience, 
                        set to the backdrop of serenity, and pristine blue waters.
                    </p>
                    <button>Discover More</button>
                </div>
            </div>
        </div>
    </div>
  )
}
