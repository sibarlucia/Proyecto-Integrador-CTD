import React from 'react'
import PropTypes from 'prop-types'

const StarRating = ({ totalStars, rating, starColor }) => {
  const percentage = (rating / totalStars) * 100
  const stars = '⭐'.repeat(totalStars)

  const starsStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: `${percentage}%`,
    overflow: 'hidden',
    color: 'transparent',
    textShadow: `0 0 ${starColor}`,
    userSelect: 'none'
  }

  const bgStyle = {
    opacity: '0.25',
    filter: 'grayscale(1)',
    userSelect: 'none'
  }

  return (
    <div className="stars-container">
      <div className="stars" style={{ position: 'relative', maxWidth: 'fit-content' }}>
        <div style={bgStyle}>{stars}</div>
        <div style={starsStyle}>{stars}</div>
      </div>
    </div>
  )
}

StarRating.propTypes = {
  totalStars: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  starColor: PropTypes.string
}

StarRating.defaultProps = {
  totalStars: 5,
  rating: 0,
  starColor: '#1dbeb4'
}

export default StarRating
