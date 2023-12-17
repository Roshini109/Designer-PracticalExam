import React from 'react'
import './navlist.css'
import {KeyboardArrowDown} from '@mui/icons-material'

export default function Navlist() {
  return (
    <div className="navbarList">
    <div className="container">
      <div className="listLinks">
        <div className="link">
          <span>ABOUT</span>
          <div className="icon"><KeyboardArrowDown/></div>
        </div>
        <div className="link">
          <span>ROOMS & SUITS</span>
          <div className="icon"><KeyboardArrowDown/></div>
        </div>
        <div className="link">
          <span>DINNING</span>
          <div className="icon"><KeyboardArrowDown/></div>
        </div>
        <div className="link">
          <span>EXPERIENCE</span>
          <div className="icon"><KeyboardArrowDown/></div>
        </div>
        <div className="link">
          <span>EVENTS</span>
          <div className="icon"><KeyboardArrowDown/></div>
        </div>
        <div className="link">
          <span>GALLERY</span>
        </div>
        <div className="link">
          <span>OFFERS</span>
        </div>
        <div className="link">
          <span>MORE</span>
          <div className="icon"><KeyboardArrowDown/></div>
        </div>
      </div>
      <button>FIND A HOTEL</button>
    </div>
  </div>
  )
}
