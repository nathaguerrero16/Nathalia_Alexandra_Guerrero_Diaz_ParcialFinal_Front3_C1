import React from 'react'
import { useGlobalStates } from './utils/Context';

const Footer = () => {

  const { state } = useGlobalStates();

  const imageSrc = state.theme === "dark" 
    ? "/images/DHDark.png" 
    : "/images/DH.png";

  return (
    <footer>
        <img src={imageSrc} alt='DH-logo' />
        <div className='iconImagesContainer'>
          <img src="/images/ico-facebook.png" alt="facebook" className='icoImages'/>
          <img src="/images/ico-instagram.png" alt="instagram" className='icoImages'/>
          <img src="/images/ico-tiktok.png" alt="tiktok" className='icoImages'/>
          <img src="/images/ico-whatsapp.png" alt="whatsapp" className='icoImages'/>
        </div>
    </footer>
  )
}

export default Footer
