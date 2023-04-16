import React, { useState } from 'react'
import '@scss/Producto/Carousel.scss'
import Modal from './Modal'

const Carousel = ({ images }) => {
  const [modalImage, setModalImage] = useState(null)
  // const [currentIndex, setCurrentIndex] = useState(0)

  const handleModalOpen = index => {
    setModalImage(index)
  }

  const handleModalClose = () => {
    setModalImage(null)
  }

  // const handlePreviousClick = () => {
  //   setCurrentIndex((currentIndex - 1 + images.length) % images.length)
  // }

  // const handleNextClick = () => {
  //   setCurrentIndex((currentIndex + 1) % images.length)
  // }
  const imagenesAMostrar = images?.slice(0, 5)
  const fullMainPic = imagenesAMostrar.length === 1 ? ' full-width' : ''

  return (
    <div className="carousel">
      {modalImage !== null && <Modal index={modalImage} imagnesArray={images} onClose={handleModalClose} />}
      {imagenesAMostrar && (
        <div className="carousel-images">
          <div className={`main-pic ${fullMainPic}`}>
            <img
              src={imagenesAMostrar[0].urlImagen}
              alt={imagenesAMostrar[0].title}
              onClick={() => handleModalOpen(0)}
            />
          </div>
          <div className="secondary-pic">
            {imagenesAMostrar.slice(1).map((image, index) => {
              return (
                // <div
                //   key={image.id}
                //   // className={`carousel-image ${currentIndex === image.id ? 'active' : ''}`}
                //   className="secondary-pic"
                //   // onClick={() => handleModalOpen(image.id)}
                // >
                <img key={image.id} src={image.urlImagen} alt={''} onClick={() => handleModalOpen(index + 1)} />
                // </div>
              )
            })}
            {images.length > 5 && (
              <p className="more-pics" onClick={() => handleModalOpen(5)}>
                Ver más
              </p>
            )}
          </div>
        </div>
      )}
      {/* <div className="carousel-navigation">
        <div className="arrow left" onClick={handlePreviousClick}>
          &#8249;
        </div>
        <div className="thumbnails">
          {images.map((thumb, index) => (
            <div
              key={index}
              className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            >
              <img src={thumb.url} alt={thumb.title} />
            </div>
          ))}
        </div>
        <div className="arrow right" onClick={handleNextClick}>
          &#8250;
        </div>
      </div> */}
    </div>
  )
}

export default Carousel
