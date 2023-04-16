import React from 'react'
import PropTypes from 'prop-types'

const description = {
  1: 'Muy malo',
  2: 'Malo',
  3: 'Regular',
  4: 'Bueno',
  5: 'Muy bueno',
}

const TextRating = ({ rating, className = '' }) => {
  const ratingRounded = Math.round(rating)

  return <p className={className}>{description[ratingRounded]}</p>
}

TextRating.propTypes = {
  rating: PropTypes.number.isRequired,
  className: PropTypes.string,
}

TextRating.defaultProps = {
  rating: 5,
  className: 'text-rating',
}

export default TextRating
