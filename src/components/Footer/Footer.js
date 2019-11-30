import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import './footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-meta'>
        <h3 className='footer-meta_header'>Three Keys</h3>

        <p className='footer-meta_text'>Keyforge is a Unique Deck Game designed by Richard Garfield and distributed by Fantasy Flight Games, check out their Keyforge page <a href='https://www.fantasyflightgames.com/en/products/keyforge/'>here</a>!</p>

        <p className='footer-meta_link'>Development and Design of this website was made by <a href='https://github.com/dlousa92/kfblog'>Daniel Lousa</a></p>
      </div>

      <div className='footer-social'>
        <Link className='footer-social_backtotop' to='/'><span>Back to Top</span></Link>

        <div className='footer-social_icons'>
          <a className='icon' href='https://twitter.com/daniel_lousa' target='_blank'><FontAwesomeIcon icon={faTwitter} /></a>
          <a className='icon' href='https://www.facebook.com/daniel.lousa.1 ' target='_blank'><FontAwesomeIcon icon={faFacebook} /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
