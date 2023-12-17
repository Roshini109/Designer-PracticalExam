import React from 'react'
import './createcard.css'
import cardData from '../../cardData'

export default function CreateCard() {
    return (
      <div className='cardContainer'>
        <h1>Experience something new</h1>
        <div className='cContainer'>
          {cardData.map(card => (
            <div key={card.id} className="cardContainer">
              <img src={card.imageUrl} alt={card.alt} />
              <h2>{card.title}</h2>
            </div>
          ))}
        </div>
      </div>
    );
  }