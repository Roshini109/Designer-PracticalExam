import React,{useState,useEffect} from 'react'
import './imageslider.css'

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const images = [
                {
                    url:'assets/homeImage1.jpg',
                    caption:'Shangri-La Colombo',
                    subCaption:'Come with us through the whimsical world of Shangri-la, where your personal paradise awaits.'
                },
                {
                    url:'assets/homeImage2.jpg',
                    caption:'Shangri-La Colombo',
                    subCaption:'A personal tropical sanctuary set within the heart of the city.'
                },
                {
                    url:'assets/homeImage3.webp',
                    caption:'Room & Suites',
                    subCaption:'Tastefully designed with the modern traveler in mind'
                },
                {
                    url:'assets/homeImage4.webp',
                    caption:'Shang Palace',
                    subCaption:'Celebrate the art of Chinese cuisine in the heart of Colombo'
                },
    ];
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    useEffect(() => {
      const intervalId = setInterval(handleNext, 10000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <div className="slideshow-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image.url})` }}
          >
            <div className="caption">{image.caption}</div>
            <span className="subCaption">{image.subCaption}</span>
          </div>
        ))}
        <button className="prev" onClick={handlePrev}>&#10094;</button>
        <button className="next" onClick={handleNext}>&#10095;</button>
      </div>
    );
  };
  
  export default ImageSlider;