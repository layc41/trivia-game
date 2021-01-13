import React from 'react';
import logo from '../assets/github2.png'


function Footer() {
  return (
    <div className= "main-footer">
    <footer className='flex-row justify-content-around'>
        <a href='https://github.com/danrosales24' target='blank'>
          <img alt='logo' src= {logo} className='footer-icon' ></img>
          <h6 className='footerName'>Daniel</h6>
        </a>
        <a href='https://github.com/sandpans' target='blank'>
          <img src={logo} className='footer-icon' alt='logo'></img>
          <h6 className='footerName'>Sandy</h6>
        </a>
        <a href='https://github.com/layc41' target='blank'>
          <img src={logo} className='footer-icon' alt='logo'></img>
          <h6 className='footerName'>Claudia</h6>
        </a>
        <a href='https://github.com/shanat24' target='blank'>
          <img src={logo} className='footer-icon' alt='logo'></img>
          <h6 className='footerName'>Shantoria</h6>
        </a>
        <a href='https://github.com/tylerhansen22' target='blank'>
          <img src={logo} className='footer-icon' alt='logo'></img>
          <h6 className='footerName'>Tyler</h6>
        </a>
    </footer>
    </div>
    
  )
}

export default Footer;