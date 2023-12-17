import React from 'react'
import './destination.css'
import {KeyboardArrowDown} from '@mui/icons-material'
import { useState } from 'react'

export default function Destination() {

    const[isActive,setIsActive]=useState(false);

  return (

    <div className="destination">
        <div className="container">
            <div className="top">
                <span>Our Destinations</span>
            </div>
            <div className="middle" onClick={(e)=>
            setIsActive(!isActive)}>
                <span>Cinnamon Dhonveli Maldives</span>
                <div className="dropdown">
                    <KeyboardArrowDown className='icon'/>
                    {isActive && (
                        <div className="content">
                        <div className="item">
                            Cinnamon Life
                        </div>
                        <div className="item">
                            Cinnamon Grand Colombo
                        </div>
                        <div className="item">
                            Cinnamon Lakeside Colombo
                        </div>
                        <div className="item">
                            Cinnamon Red Colombo
                        </div>
                        <div className="item">
                            Cinnamon Benthota Beach
                        </div>
                        <div className="item">
                            Cinnamon Bey Beruwala
                        </div>
                        <div className="item">
                            Hikka Tranz by Cinnamon
                        </div>
                        <div className="item">
                            Cinnamon Wild Yala
                        </div>
                        <div className="item">
                            Trinco Blue by Cinnamon
                        </div>
                        <div className="item">
                            Cinnamon Citadel Kandy
                        </div>
                        <div className="item">
                            Cinnamon Lodge Habarana
                        </div>
                        <div className="item">
                            Habarana Village by Cinnamon
                        </div>
                        <div className="item">
                            Cinnamon Velifushi Maldives
                        </div>
                        <div className="item">
                            Cinnamon Hakuraa Huraa Maldives
                        </div>
                        <div className="item">
                            Cinnamon Dhonveli Maldives
                        </div>
                        <div className="item">
                            EllaidhooMaldives by Cinnamon
                        </div>
                    </div>
                    )}
                </div>

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
