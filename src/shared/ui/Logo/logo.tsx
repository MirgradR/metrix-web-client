import React from 'react'
import { LogoProps } from './logo.model'
import './logo.styles.css'
import blueLogo from './img/blueLogo.png'
import mainLogo from './img/mainLogo.png'

const Logo = ({ size = '52', withText = false, isBlueLogo = false }: LogoProps) => {
  const src = isBlueLogo ? blueLogo : mainLogo

  return (
    <div className="logo">
      <img width={size} height={size} src={src} alt="Logo" />
      {withText && <span className="logo__title">Metrix</span>}
    </div>
  )
}

export default Logo
