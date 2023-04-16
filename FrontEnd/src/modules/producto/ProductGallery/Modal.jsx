import React, { useEffect, useState } from 'react'
import '@scss/Producto/Modal.scss'

const Modal = ({ index, imagnesArray, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePreviousClick = () => {
    setCurrentIndex((currentIndex - 1 + imagnesArray.length) % imagnesArray.length)
  }

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % imagnesArray.length)
  }

  const handleThumbnailClick = index => {
    setCurrentIndex(index)
  }

  const [windowsSize, setWindowsSize] = useState(20000)

  function handleResize() {
    const width = window.innerWidth
    setWindowsSize(width)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()
    setCurrentIndex(index)
  }, [])

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.keyCode === 37) {
        handlePreviousClick()
      } else if (event.keyCode === 39) {
        handleNextClick()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentIndex])

  console.log('currentIndex', currentIndex)

  return (
    index !== null && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            x
          </span>
          <div className="image-container">
            <img src={imagnesArray[currentIndex].urlImagen} alt={'Image'} />
            <div className="arrow left" onClick={handlePreviousClick}>
              &#8249;
            </div>
            <div className="arrow right" onClick={handleNextClick}>
              &#8250;
            </div>
          </div>
          <div className="thumbnails">
            {windowsSize > 649
              ? imagnesArray.map((thumb, index) => (
                  <div
                    key={index}
                    className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <img src={thumb.urlImagen} alt={'Image'} />
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    )
  )
}

export default Modal
