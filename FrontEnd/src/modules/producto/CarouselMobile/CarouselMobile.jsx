import React, { useState, useEffect } from 'react'
import './CarouselMobile.scss'

const CarouselMobile = ({images}) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [autoPlay, setAutoPlay] = useState(true)

    const previous = () => {
        const condicion = selectedIndex > 0;
        const nextIndex = condicion ? selectedIndex-1 : images.length -1;
        setSelectedImage(images[nextIndex]);
        setSelectedIndex(nextIndex)
    }

    
    useEffect(() => {
        if(autoPlay) {
            const interval = setInterval(() => {
                next()
            }, 3000)
        return () => clearInterval(interval);
        }
        })

    const toggleAutoPlay = () => {
        setAutoPlay(!autoPlay)
    }

    const next = () => {
        const condicion = selectedIndex < images.length - 1;
        const nextIndex = condicion ? selectedIndex + 1 : 0;
        setSelectedImage(images[nextIndex]);
        setSelectedIndex(nextIndex)
        console.log(nextIndex)
    }
       
  return (
    <div className="carousel-mobile">
        <img src={selectedImage.urlImagen} />
        <div className="botones">
            <button onClick={previous}><i className="fa-solid fa-chevron-left"></i></button>
            <button onClick={next}><i className="fa-solid fa-chevron-right" /></button>
        </div>
        <div className="stop-count">
        <button onClick={toggleAutoPlay} className="btn-stop">{autoPlay ? <i className="fa-solid fa-pause" /> : <i className="fa-solid fa-play"></i>}</button>
        <span>{selectedIndex + 1}/{images.length}</span>
    </div></div>
  )
}

export default CarouselMobile