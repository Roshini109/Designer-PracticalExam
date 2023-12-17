import React,{useState,useEffect} from 'react'
import './imageslider.css'

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const images = [
                {
                    url:'assets/homeImage1.jpg',
                    caption:'SHANGRI-LA COLOMBO'
                },
                {
                    url:'assets/homeImage2.png',
                    caption:'SHANGRI-LA Colombo'
                },
                {
                    url:'assets/homeImage3.webp',
                    caption:'Shangri-La colombo'
                },
                {
                    url:'assets/homeImage4.webp',
                    caption:'shangriLa-colombo'
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
          </div>
        ))}
        <button className="prev" onClick={handlePrev}>&#10094;</button>
        <button className="next" onClick={handleNext}>&#10095;</button>
      </div>
    );
  };
  
  export default ImageSlider;