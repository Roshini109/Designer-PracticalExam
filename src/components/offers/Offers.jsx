import React from 'react'
import './offers.css'
import offers from '../../offersData'

export default function Offers() {
  return (
    <div className='offers'>
        <h1>Offers</h1>
        <div className='offerContainer'>
          {offers.map(card => (
            <div key={card.id} className="offerCard">
              <img src={card.url} />
                <h4>{card.title}</h4>
                <span className="date">{card.date}</span>
                <span className='offer'>{card.offer}</span>
                <p>{card.desc}</p>
                <span className='price'>{card.price}</span>
                <button>View Details</button>
              </div>
          ))}
        </div>
      </div>
  )
}
