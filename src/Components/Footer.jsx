import React from 'react'
import { useGlobalStates } from './utils/Context';

const Footer = () => {

  const { state } = useGlobalStates();

  const imageSrc = state.theme === "dark" 
    ? "../public/images/DHDark.png" 
    : "../public/images/DH.png";

  return (
    <footer>
        <p>Powered by</p>
        <img src={imageSrc} alt='DH-logo' />
    </footer>
  )
}

export default Footer
