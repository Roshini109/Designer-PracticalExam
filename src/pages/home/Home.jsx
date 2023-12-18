import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Navlist from '../../components/navlist/Navlist'
import ImageSlider from '../../components/imageslider/ImageSlider'
import Destination from '../../components/destination/Destination';
import CreateCard from '../../components/createCard/CreateCard';
import Offers from '../../components/offers/Offers';

const slideImages=[
  {
      url:'assets/homeImage1.jpg',
      caption:'SHANGRI-LA COLOMBO'
  },
  {
      url:'assets/homeImage2.jpg',
      caption:'SHANGRI-LA Colombo'
  },
  {
      url:'assets/homeImage3webp',
      caption:'Shangri-La colombo'
  },
  {
      url:'assets/homeImage4.webp',
      caption:'shangriLa-colombo'
  },
];


export default function Home() {
  return (
    <div>
        <Navbar/>
        <Navlist/>
        <ImageSlider slides={slideImages}/>
        <Destination />
        <CreateCard/>
        <Offers/>
    </div>
  )
}
