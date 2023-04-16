import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <>
      <footer
      data-testid="footer"
        style={{
          width: '100%',
          height: '58px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#1DBEB4',
          position: 'fixed',
          bottom: 0,
          zIndex: 5,
        }}
      >
        <div style={{ marginLeft: '30px' }}>
          <p>©2023 Digital Booking</p>
        </div>
        <div className="md-visible" style={{ marginRight: '30px' }}>
          <FontAwesomeIcon style={{ fontSize: '28px', margin: '0  15px' }} icon={faFacebook} title="Facebook"/>
          <FontAwesomeIcon style={{ fontSize: '28px', margin: '0  15px' }} icon={faLinkedinIn} title="LinkedIn" />
          <FontAwesomeIcon style={{ fontSize: '28px', margin: '0  15px' }} icon={faTwitter} title="Twitter" />
          <FontAwesomeIcon style={{ fontSize: '28px', margin: '0  15px' }} icon={faInstagram} title="Instagram" />
        </div>
      </footer>
    </>
  )
}

export default Footer
